import { __colors__ } from "../lib/constants";
import { Command } from "../lib/types";

const STATS: Record<string, Record<string, number>> = {
	Languages: {
		TypeScript: 16,
		"HTML/CSS": 13,
		"C++": 14,
		Python: 11,
		Java: 10,
		Go: 3,
		Rust: 6,
		Bash: 3,
		Haskell: 1,
		"C#": 5
	},
	Environment: {
		Linux: 15,
		Windows: 13,
		"Vim/Neovim": 16,
		VSCode: 14,
		GitHub: 14
	},
	"Libraries & Frameworks": {
		"Vanilla JS": 15,
		React: 15,
		"Next.js": 16,
		Tailwind: 16,
		GraphQL: 13,
		Express: 11
	},
	Databases: {
		MongoDB: 14,
		PostgreSQL: 6,
		Firebase: 5
	},
	"Other Tools": {
		Git: 13,
		Yarn: 16,
		Unity: 8
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
