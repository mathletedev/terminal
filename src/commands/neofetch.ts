import { getParser } from "bowser";
import { __colors__, __mobile__ } from "../lib/constants";
import { Command } from "../lib/types";

export default ((term) => {
	const parser = getParser(navigator.userAgent);
	const platform = parser.getPlatformType();

	const mins = Math.floor((Date.now() - term.created) / 60000);
	const hours = Math.floor(mins / 60);

	const data = [
		["💾 OS", parser.getOSName()],
		[
			`${platform === "desktop" ? "💻" : "📱"} Platform`,
			platform[0].toUpperCase() + platform.slice(1)
		],
		["⚙️ Engine", parser.getEngineName()],
		["🌐 Browser", parser.getBrowserName()],
		[
			"⌛ Uptime",
			`${hours > 0 ? `${hours} hour${hours === 1 ? "" : "s"}, ` : ""}${
				mins % 60
			} min${mins === 1 ? "" : "s"}`
		],
		["⌨️ Language", "TypeScript"],
		["👤 User", "MathleteDev"]
	];

	const info = (i: number) => {
		term.echo(data[i][0], __colors__.blue);
		term.echo(" => ", __colors__.cyan);
		term.echoLn(data[i][1], __colors__.green);
	};

	const ascii = (text: string, i?: string | number) => {
		if (__mobile__) return term.echoLn(text, __colors__.yellow);

		term.echo(`${text}${" ".repeat(34 - text.length)}`, __colors__.yellow);
		if (i === undefined) return term.echo();
		if (typeof i === "string") return term.echoLn(i, __colors__.magenta);

		info(i);
	};

	ascii("               WWNNWW    WNXXW", "neo@delta");
	ascii("          WXOdlccc::cldxdl:,:K", "─────────");
	ascii("        W0o;,,,,,,,'',:::;,'lN", 0);
	ascii("      WKo'.';;::clloddoc:c:,xW", 1);
	ascii(" WXkdoc,.,clodxxxxxxdl:col,.lX", 2);
	ascii(" WO:.''.':llooddxddl::looc'.'xW", 3);
	ascii("  WXxc'.;oolllllc:;:loooo;,;.lN", 4);
	ascii("     Xl.,lxkkkkkdc,:ododl,::.oN", 5);
	ascii("      O;.';cdkkkkdc:cooo:,:,,O", 6);
	ascii("      Wk;';;;:oxkkxl:ldl,.',kW");
	ascii("       W0l,,;,,:oxkxc:c;.'l0W");
	ascii("         W0dc;,..,;;,...:OW");
	ascii("            WX0Okxdc,..'xW");
	ascii("                   W0o,:K");
	ascii("                     WXXW");

	if (!__mobile__) return;
	term.echo();

	term.echoLn("neo@mathletedev", __colors__.magenta);
	term.echoLn("---------------", __colors__.magenta);
	for (let i = 0; i < data.length; i++) info(i);
}) as Command;
