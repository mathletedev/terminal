import { Command } from "../lib/types";
import about from "./about";
import clear from "./clear";
import echo from "./echo";
import help from "./help";
import ls from "./ls";
import neofetch from "./neofetch";
import old from "./old";
import skills from "./skills";
import yes from "./yes";

export default {
	about,
	clear,
	echo,
	help,
	ls,
	neofetch,
	old,
	skills,
	yes
} as Record<string, Command>;
