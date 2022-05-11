import { __colors__ } from "../lib/constants";
import { Command } from "../lib/types";

const COMMANDS = [
	"clear",
	"echo",
	"help",
	"ls",
	"neofetch",
	"old",
	"skills",
	"yes"
];

export default ((term) =>
	term.echoLn(COMMANDS.join("  "), __colors__.blue)) as Command;
