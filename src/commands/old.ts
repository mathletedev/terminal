import { Command } from "../lib/types";

export default ((term) => {
	window.open("https://mathletedev.vercel.app");
	term.echo();
}) as Command;
