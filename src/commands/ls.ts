import { __colors__, __mobile__ } from "../lib/constants";
import { Command } from "../lib/types";

const COMMANDS = [
	["about [section]", "displays some stuff about me"],
	["clear", "clears terminal"],
	["echo [text]", "writes text to terminal"],
	["help", "displays help info"],
	["ls", "lists all commands"],
	["neofetch", "displays info about website"],
	["old", "redirects to old website"],
	["skills [section]", "displays stats of my skills"],
	["yes", "???"]
];

export default ((term) => {
	for (const command of COMMANDS) {
		if (__mobile__) {
			term.echoLn(command[0]);
			term.echoLn(` ${command[1]}`, __colors__.green);
			continue;
		}

		term.echo(command[0]);
		term.echo(" => ", __colors__.teal);
		term.echoLn(command[1], __colors__.green);
	}
}) as Command;
