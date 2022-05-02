import { __colors__, __cursorDelay__, __mobile__ } from "./lib/constants";

let root = document.querySelector("#root")!;
let line = document.querySelector("#line")!;
let input = document.querySelector("input") as HTMLInputElement;
let cursor = document.querySelector("#cursor") as HTMLSpanElement;

let wait = 0;

const echo = (text?: string, color?: string) => {
	if (!text) {
		const br = document.createElement("br");
		br.className = "text";
		root.insertBefore(br, line);

		return line.scrollIntoView();
	}

	let span = document.createElement("span");
	span.innerHTML = text;
	span.style.color = color || __colors__.white;
	span.className = "text";

	root.insertBefore(span, line);
};

const echoLn = (text?: string, color?: string) => {
	echo(text, color);
	echo();
};

const clear = () => {
	for (const elem of document.querySelectorAll(".text")) elem.remove();
};

const INFO = [
	["User", "MathleteDev"],
	["OS", "Arch Linux"],
	["Language", "TypeScript"],
	["Grade", "Freshman"],
	["Subject", "Math"],
	["Hobby", "Violin"]
];

const info = (i: string | number) => {
	if (typeof i === "string") return echo(i, __colors__.magenta);

	echo(INFO[i][0], __colors__.blue);
	echo(" => ", __colors__.cyan);
	echo(INFO[i][1], __colors__.green);
};

const ascii = (text: string, i: string | number) => {
	if (__mobile__) return echoLn(text);

	echo(`${text}${" ".repeat(34 - text.length)}`);
	info(i);
	echo();
};

echo();
if (__mobile__) {
	echoLn("        neo@mathletedev", __colors__.magenta);
	echoLn("        ---------------", __colors__.magenta);
}
ascii("               WWNNWW    WNXXW", "neo@delta");
ascii("          WXOdlccc::cldxdl:,:K", "---------");
ascii("        W0o;,,,,,,,'',:::;,'lN", 0);
ascii("      WKo'.';;::clloddoc:c:,xW", 1);
ascii(" WXkdoc,.,clodxxxxxxdl:col,.lX", 2);
ascii(" WO:.''.':llooddxddl::looc'.'xW", 3);
ascii("  WXxc'.;oolllllc:;:loooo;,;.lN", 4);
ascii("     Xl.,lxkkkkkdc,:ododl,::.oN", 5);
echoLn("      O;.';cdkkkkdc:cooo:,:,,O");
echoLn("      Wk;';;;:oxkkxl:ldl,.',kW");
echoLn("       W0l,,;,,:oxkxc:c;.'l0W");
echoLn("         W0dc;,..,;;,...:OW");
echoLn("            WX0Okxdc,..'xW");
echoLn("                   W0o,:K");
echoLn("                     WXXW");
echo();
echo("Type ");
echo("help", __colors__.blue);
echoLn(" to begin!");

window.onkeydown = (ev) => {
	input.focus();
	wait = Date.now();

	if (ev.key === "l" && ev.ctrlKey) {
		clear();
		return ev.preventDefault();
	}

	if (ev.key === "Enter") {
		if (input.value === "clear") clear();
		else echoLn(input.value);
		input.value = "";
	}
};

input.onblur = () => input.focus();

const loop = () => {
	requestAnimationFrame(loop);

	cursor.style.height =
		wait + __cursorDelay__ > Date.now()
			? "18px"
			: `${18 - Math.pow(Math.sin(Date.now() / 300), 4) * 18}px`;

	const pos = -window.innerWidth + 22 + (input.selectionStart! + 1) * 10.55;
	cursor.style.left = pos > 0 ? "0px" : `${pos}px`;
};

requestAnimationFrame(loop);
