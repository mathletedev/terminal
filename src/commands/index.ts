import { Command } from "../lib/types";
import clear from "./clear";
import echo from "./echo";
import help from "./help";
import ls from "./ls";
import neofetch from "./neofetch";

export default {
	clear,
	echo,
	help,
	ls,
	neofetch
} as Record<string, Command>;
