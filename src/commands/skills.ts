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
	const stat = (title: string) => {
		term.echoLn("┌───────────────────────────────┐");
		term.echoLn(
			`│${" ".repeat((31 - title.length) / 2)}${title}${" ".repeat(
				Math.ceil((31 - title.length) / 2)
			)}│`
		);
		term.echoLn("├────────────┬──────────────────┤");

		for (const key in STATS[title]) {
			const exp = STATS[title][key];

			term.echo("│ ");
			term.echo(`${key}${" ".repeat(10 - key.length)}`, __colors__.blue);
			term.echo(" │ ");
			term.echo(
				"⬛".repeat(exp),
				__colors__[exp > 12 ? "green" : exp > 8 ? "yellow" : "red"]
			);
			term.echoLn(`${" ".repeat(16 - exp)} │`);
		}

		term.echoLn("└────────────┴──────────────────┘");
	};

	if (!term.args.length) {
		for (const title in STATS) stat(title);
		return term.echo();
	}

	const args = term.args.join(" ");
	for (const title in STATS) {
		if (title.toLowerCase().startsWith(args.toLowerCase())) {
			stat(title);
			return term.echo();
		}
	}

	const i = parseInt(args);
	const keys = Object.keys(STATS);
	if (i < keys.length) {
		stat(keys[i]);
		return term.echo();
	}

	term.error();
	term.echo("Invalid argument ");
	term.echoLn(args, __colors__.magenta);
	term.echo();
}) as Command;
