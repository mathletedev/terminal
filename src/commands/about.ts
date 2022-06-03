import { __colors__ } from "../lib/constants";
import { Command } from "../lib/types";

const STATS: Record<string, Record<string, number>> = {
	Hobbies: {
		Violin: 16,
		Art: 14,
		Multimedia: 13
	},
	Languages: {
		English: 16,
		Chinese: 9,
		French: 5
	},
	"Clubs & Activities": {
		GPYO: 15,
		Robotics: 14,
		"CS Club": 16,
		"Chess Club": 11,
		"Know. Bowl": 5,
		"Sci. Bowl": 7
	},
	Sports: {
		Tennis: 13,
		Soccer: 9
	}
};

export default ((term) => {
	if (!term.args.length) {
		for (const title in STATS) term.stat(STATS, title);
		return;
	}

	const args = term.args.join(" ");
	for (const title in STATS) {
		if (title.toLowerCase().startsWith(args.toLowerCase())) {
			term.stat(STATS, title);
			return;
		}
	}

	const i = parseInt(args);
	const keys = Object.keys(STATS);
	if (i < keys.length) return term.stat(STATS, keys[i]);

	term.error();
	term.echo("Invalid argument ");
	term.echoLn(args, __colors__.mauve);
}) as Command;
