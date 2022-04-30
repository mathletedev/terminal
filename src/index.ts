import { __colors__ } from "./lib/constants";

let root = document.querySelector("#root")!;
let line = document.querySelector("#line")!;
let cursor = document.querySelector("#cursor") as HTMLSpanElement;

const echo = (text?: string, color?: string) => {
	if (!text) {
		root.insertBefore(document.createElement("br"), line);
		return;
	}

	let span = document.createElement("span");
	span.innerHTML = text;
	span.style.color = color || __colors__.white;

	root.insertBefore(span, line);
};

echo("Hello, ", __colors__.red);
echo("world!", __colors__.green);
echo();
echo("MathleteDev");

const loop = () => {
	requestAnimationFrame(loop);

	cursor.style.height = `${
		23 - Math.pow(Math.sin(Date.now() / 300), 4) * 23
	}px`;
};

requestAnimationFrame(loop);
