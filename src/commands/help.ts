import { __colors__ } from "../lib/constants";
import { Command } from "../lib/types";

export default ((term) => {
	term.echoLn("BNU gash, version 6.28");
	term.echo("Type a command and hit ");
	term.echo("enter (⏎)", __colors__.yellow);
	term.echoLn(" to execute it!");
	term.echo("Type ");
	term.echo("ls⏎", __colors__.yellow);
	term.echoLn(" to view a list of commands!");
}) as Command;
