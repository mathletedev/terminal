import commands from "./commands";
import { __colors__, __cursorDelay__ } from "./lib/constants";

export default class Terminal {
	public readonly created = Date.now();
	private root = document.querySelector("#root")!;
	private line = document.querySelector("#line")!;
	private input = document.querySelector("input") as HTMLInputElement;
	private cursor = document.querySelector("#cursor") as HTMLSpanElement;
	private history: string[] = [];
	private current = 0;
	private value = "";
	private last = 0;

	public constructor() {
		window.onkeydown = (ev) => {
			this.input.focus();
			this.last = Date.now();

			switch (ev.key) {
				case "Enter":
					if (this.input.value.trim() === "") {
						this.echoLn("λ ", __colors__.blue);
						this.echo();
						break;
					}

					this.history = this.history.filter((e) => e !== this.input.value);
					this.history.unshift(this.input.value);

					if (commands[this.command]) {
						this.echoLn(`λ ${this.input.value}`, __colors__.blue);
						commands[this.command](this);
						if (this.command !== "clear") this.echo();
					} else {
						this.echo("λ ", __colors__.blue);
						this.echoLn(this.input.value, __colors__.red);
						this.echo("Unknown command: ");
						this.echoLn(this.command, __colors__.red);
						this.echo();
					}

					this.input.value = "";
					break;

				case "ArrowUp":
					ev.preventDefault();
					if (!this.history.length) break;
					if (this.current === -1) this.value = this.input.value;

					if (this.current < this.history.length - 1) this.current++;
					this.input.value = this.history[this.current];

					this.update();
					this.end();
					break;

				case "ArrowDown":
					ev.preventDefault();
					if (this.current === -1) break;

					this.current--;
					if (this.current === -1) this.input.value = this.value;
					else this.input.value = this.history[this.current];

					this.update();
					this.end();
					break;

				case "c":
					if (!ev.ctrlKey) break;
					this.echo("λ ", __colors__.blue);
					this.echoLn(this.input.value, __colors__.red);
					this.echo();

					this.input.value = "";
					break;

				case "l":
					if (!ev.ctrlKey) break;
					this.clear();
					ev.preventDefault();
					break;
			}
		};

		this.input.onblur = () => this.input.focus();
		this.input.oninput = () => {
			this.current = -1;
			this.update();
		};

		this.echo();
		commands.neofetch(this);
		this.echo();
		this.echoLn("Welcome to MathleteDev's website!");
		this.echo("Type ", __colors__.blue);
		this.echo("help⏎", __colors__.yellow);
		this.echoLn(" to begin!", __colors__.blue);
		this.echo();
	}

	public echo = (text?: string, color?: string) => {
		if (!text) {
			const br = document.createElement("br");
			br.className = "text";
			this.root.insertBefore(br, this.line);

			return this.line.scrollIntoView(false);
		}

		if (this.isUrl(text)) {
			let a = document.createElement("a");
			a.href = a.innerHTML = text;
			a.style.color = color || __colors__.white;
			a.className = "text";

			return this.root.insertBefore(a, this.line);
		}

		let span = document.createElement("span");
		span.innerHTML = text;
		span.style.color = color || __colors__.white;
		span.className = "text";

		this.root.insertBefore(span, this.line);
	};

	public echoLn(text?: string, color?: string) {
		if (text) this.echo(text, color);
		this.echo();
	}

	public error(text?: string) {
		this.echo("Error: ", __colors__.red);
		if (text) this.echoLn(text);
	}

	public get command() {
		return this.input.value.split(" ")[0];
	}

	public get args() {
		let args = this.input.value.split(" ");
		args.shift();

		return args;
	}

	public tick() {
		this.cursor.style.height =
			this.last + __cursorDelay__ > Date.now()
				? "18px"
				: `${18 - Math.pow(Math.sin(Date.now() / 300), 4) * 18}px`;

		const pos =
			-window.innerWidth + 22 + (this.input.selectionStart! + 1) * 10.55;
		this.cursor.style.left = pos > 0 ? "0px" : `${pos}px`;
	}

	public clear() {
		for (const elem of document.querySelectorAll(".text")) elem.remove();
	}

	public stat(stats: Record<string, Record<string, number>>, title: string) {
		this.echoLn("┌───────────────────────────────┐");
		this.echoLn(
			`│${" ".repeat((31 - title.length) / 2)}${title}${" ".repeat(
				Math.ceil((31 - title.length) / 2)
			)}│`
		);
		this.echoLn("├────────────┬──────────────────┤");

		for (const key in stats[title]) {
			const exp = stats[title][key];

			this.echo("│ ");
			this.echo(`${key}${" ".repeat(10 - key.length)}`, __colors__.blue);
			this.echo(" │ ");
			this.echo(
				"⬛".repeat(exp),
				__colors__[exp > 12 ? "green" : exp > 8 ? "yellow" : "red"]
			);
			this.echoLn(`${" ".repeat(16 - exp)} │`);
		}

		this.echoLn("└────────────┴──────────────────┘");
	}

	private update() {
		this.input.style.color = commands[this.command]
			? __colors__.blue
			: __colors__.white;
	}

	private end() {
		this.input.setSelectionRange(
			this.input.value.length,
			this.input.value.length
		);
	}

	private isUrl(text: string) {
		try {
			const url = new URL(text);
			return url.protocol === "http:" || url.protocol === "https:";
		} catch (_) {
			return false;
		}
	}
}
