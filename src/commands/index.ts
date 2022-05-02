import { Command } from "../lib/types";
import clear from "./clear";
import echo from "./echo";
import neofetch from "./neofetch";

export default {
	clear,
	echo,
	neofetch
} as Record<string, Command>;
