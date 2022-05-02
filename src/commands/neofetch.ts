import { __colors__, __mobile__ } from "../lib/constants";
import { Command } from "../lib/types";

const INFO = [
	["User", "MathleteDev"],
	["OS", "Arch Linux"],
	["Language", "TypeScript"],
	["Grade", "Freshman"],
	["Subject", "Math"],
	["Hobby", "Violin"]
];

export default ((term) => {
	const info = (i: string | number) => {
		if (typeof i === "string") return term.echoLn(i, __colors__.magenta);

		term.echo(INFO[i][0], __colors__.blue);
		term.echo(" => ", __colors__.cyan);
		term.echoLn(INFO[i][1], __colors__.green);
	};

	const ascii = (text: string, i: string | number) => {
		if (__mobile__) return term.echoLn(text);

		term.echo(`${text}${" ".repeat(34 - text.length)}`);
		info(i);
	};

	ascii("               WWNNWW    WNXXW", "neo@delta");
	ascii("          WXOdlccc::cldxdl:,:K", "---------");
	ascii("        W0o;,,,,,,,'',:::;,'lN", 0);
	ascii("      WKo'.';;::clloddoc:c:,xW", 1);
	ascii(" WXkdoc,.,clodxxxxxxdl:col,.lX", 2);
	ascii(" WO:.''.':llooddxddl::looc'.'xW", 3);
	ascii("  WXxc'.;oolllllc:;:loooo;,;.lN", 4);
	ascii("     Xl.,lxkkkkkdc,:ododl,::.oN", 5);
	term.echoLn("      O;.';cdkkkkdc:cooo:,:,,O");
	term.echoLn("      Wk;';;;:oxkkxl:ldl,.',kW");
	term.echoLn("       W0l,,;,,:oxkxc:c;.'l0W");
	term.echoLn("         W0dc;,..,;;,...:OW");
	term.echoLn("            WX0Okxdc,..'xW");
	term.echoLn("                   W0o,:K");
	term.echoLn("                     WXXW");
	term.echo();

	if (!__mobile__) return;

	term.echoLn("neo@mathletedev", __colors__.magenta);
	term.echoLn("---------------", __colors__.magenta);
	for (let i = 0; i < INFO.length; i++) info(i);

	term.echo();
}) as Command;
