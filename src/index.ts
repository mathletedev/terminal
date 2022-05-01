import { __colors__, __cursorDelay__ } from "./lib/constants";

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

const echoLn = (text?: string) => {
	echo(text);
	echo();
};

const clear = () => {
	for (const elem of document.querySelectorAll(".text")) elem.remove();
};

echo();
echoLn("               WWNNWW    WNXXW");
echoLn("          WXOdlccc::cldxdl:,:K");
echoLn("        W0o;,,,,,,,'',:::;,'lN");
echoLn("      WKo'.';;::clloddoc:c:,xW");
echoLn(" WXkdoc,.,clodxxxxxxdl:col,.lX");
echoLn(" WO:.''.':llooddxddl::looc'.'xW");
echoLn("  WXxc'.;oolllllc:;:loooo;,;.lN");
echoLn("     Xl.,lxkkkkkdc,:ododl,::.oN");
echoLn("      O;.';cdkkkkdc:cooo:,:,,O");
echoLn("      Wk;';;;:oxkkxl:ldl,.',kW");
echoLn("       W0l,,;,,:oxkxc:c;.'l0W");
echoLn("         W0dc;,..,;;,...:OW");
echoLn("            WX0Okxdc,..'xW");
echoLn("                   W0o,:K");
echoLn("                     WXXW");
echo();

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
