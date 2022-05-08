import { Command } from "../lib/types";
import clear from "./clear";
import echo from "./echo";
import help from "./help";
import ls from "./ls";
import neofetch from "./neofetch";
import skills from "./skills";
import yes from "./yes";

export default {
	clear,
	echo,
	help,
	ls,
	neofetch,
	skills,
	yes
} as Record<string, Command>;
