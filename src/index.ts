import Terminal from "./terminal";

const term = new Terminal();

const loop = () => {
	requestAnimationFrame(loop);
	term.tick();
};

requestAnimationFrame(loop);
