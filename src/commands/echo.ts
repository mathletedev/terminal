import { Command } from "../lib/types";

export default ((term) => term.echoLn(term.args.join(" "))) as Command;
