import commands from "./commands";
import { __colors__, __cursorDelay__ } from "./lib/constants";

export default class Terminal {
	private root = document.querySelector("#root")!;
	private line = document.querySelector("#line")!;
	private input = document.querySelector("input") as HTMLInputElement;
	private cursor = document.querySelector("#cursor") as HTMLSpanElement;
	private last = 0;

	public constructor() {
		window.onkeydown = (ev) => {
			this.input.focus();
			this.last = Date.now();

			if (ev.key === "Enter") {
				if (this.input.value.trim() === "") {
					this.echoLn("λ ", __colors__.blue);
					return this.echo();
				}

				if (commands[this.command]) {
					this.echoLn(`λ ${this.input.value}`, __colors__.blue);
					commands[this.command](this);
				} else {
					this.echo("λ ", __colors__.blue);
					this.echoLn(this.input.value, __colors__.red);
					this.echo("Unknown command: ");
					this.echoLn(this.command, __colors__.red);
					this.echo();
				}

				return (this.input.value = "");
			}

			if (ev.key === "l" && ev.ctrlKey) {
				this.clear();
				return ev.preventDefault();
			}
		};

		this.input.onblur = () => this.input.focus();
		this.input.oninput = () =>
			(this.input.style.color = commands[this.command]
				? __colors__.blue
				: __colors__.white);

		this.echo();
		commands.neofetch(this);
		this.echo("Type ");
		this.echo("help", __colors__.blue);
		this.echoLn(" to begin!");
	}

	public echo = (text?: string, color?: string) => {
		if (!text) {
			const br = document.createElement("br");
			br.className = "text";
			this.root.insertBefore(br, this.line);

			return this.line.scrollIntoView();
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

	public get command() {
		return this.input.value.split(" ")[0];
	}

	public get args() {
		let args = this.input.value.split(" ");
		args.shift();

		return args;
	}

	public clear() {
		for (const elem of document.querySelectorAll(".text")) elem.remove();
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
}
