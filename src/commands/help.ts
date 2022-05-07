import { Command } from "../lib/types";

export default ((term) => {
	term.echoLn("Type ls to see a list of commands!");
	term.echo();
}) as Command;
