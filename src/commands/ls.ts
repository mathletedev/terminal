import { __colors__ } from "../lib/constants";
import { Command } from "../lib/types";

export default ((term) => {
	term.echoLn("clear  echo  help  ls  neofetch skills yes", __colors__.blue);
	term.echo();
}) as Command;
