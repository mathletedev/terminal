import { __colors__, __cursorDelay__ } from "./lib/constants";

let root = document.querySelector("#root")!;
let line = document.querySelector("#line")!;
let input = document.querySelector("input") as HTMLInputElement;
let cursor = document.querySelector("#cursor") as HTMLSpanElement;

let wait = 0;

window.onkeydown = ({ key }) => {
	input.focus();
	wait = Date.now();

	if (key === "Enter") {
		echo(input.value);
		echo();
		input.value = "";
	}
};

input.onblur = () => input.focus();

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

const loop = () => {
	requestAnimationFrame(loop);

	cursor.style.height =
		wait + __cursorDelay__ > Date.now()
			? "23px"
			: `${23 - Math.pow(Math.sin(Date.now() / 300), 4) * 23}px`;

	const pos = -window.innerWidth + 22 + (input.selectionStart! + 1) * 10.55;
	cursor.style.left = pos > 0 ? "0px" : `${pos}px`;
};

requestAnimationFrame(loop);
