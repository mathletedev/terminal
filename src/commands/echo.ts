import { Command } from "../lib/types";

export default ((term) => {
	term.echoLn(term.args.join(" "));
	term.echo();
}) as Command;
