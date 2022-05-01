import Keyboard from "simple-keyboard";
import { __colors__, __cursorDelay__ } from "./lib/constants";

let root = document.querySelector("#root") as HTMLElement;
let line = document.querySelector("#line")!;
let command = document.querySelector("#command") as HTMLSpanElement;
let cursor = document.querySelector("#cursor") as HTMLSpanElement;

let wait = 0;

if (/Mobi/.test(navigator.userAgent)) {
	let elem = document.createElement("div");
	elem.className = "simple-keyboard";
	document.body.appendChild(elem);

	new Keyboard({
		onKeyPress: (key: string) => {
			wait = Date.now();

			switch (key) {
				default:
					command.innerHTML += key;
					break;
				case "=>":
					exec();
					break;
				case "<=":
					command.innerHTML = command.innerHTML.substring(
						0,
						command.innerHTML.length - 1
					);
					break;
				case "{space}":
					command.innerHTML += " ";
					break;
			}
		},
		layout: {
			default: [
				"q w e r t y u i o p",
				"a s d f g h j k l",
				"<= z x c v b n m =>",
				"{space}"
			]
		}
	});

	root.style.height = `calc(100vh - ${elem.clientHeight}px)`;
}

const echo = (text?: string, color?: string) => {
	if (!text) {
		root.insertBefore(document.createElement("br"), line);
		return line.scrollIntoView();
	}

	let span = document.createElement("span");
	span.innerHTML = text;
	span.style.color = color || __colors__.white;

	root.insertBefore(span, line);
};

const exec = () => {
	echo(command.innerHTML, __colors__.green);
	echo();
	command.innerHTML = "";
};

echo("Hello, ", __colors__.red);
echo("world!", __colors__.green);
echo();
echo("MathleteDev");
echo();

window.addEventListener("keydown", (ev) => {
	wait = Date.now();

	if (ev.key === "Enter") return exec();
	if (ev.key === "Backspace")
		return (command.innerHTML = command.innerHTML.substring(
			0,
			command.innerHTML.length - 1
		));
	if (ev.key.length === 1) command.innerHTML += ev.key;
});

const loop = () => {
	requestAnimationFrame(loop);

	cursor.style.height =
		wait + __cursorDelay__ > Date.now()
			? "23px"
			: `${23 - Math.pow(Math.sin(Date.now() / 300), 4) * 23}px`;
};

requestAnimationFrame(loop);
