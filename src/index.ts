import { __colors__, __cursorDelay__ } from "./lib/constants";

let root = document.querySelector("#root")!;
let line = document.querySelector("#line")!;
let command = document.querySelector("#command") as HTMLSpanElement;
let cursor = document.querySelector("#cursor") as HTMLSpanElement;

let wait = 0;

const echo = (text?: string, color?: string) => {
  if (!text) {
    root.insertBefore(document.createElement("br"), line);
    return;
  }

  let span = document.createElement("span");
  span.innerHTML = text;
  span.style.color = color || __colors__.white;

  root.insertBefore(span, line);
};

echo("Hello, ", __colors__.red);
echo("world!", __colors__.green);
echo();
echo("MathleteDev");
echo();

window.addEventListener("keydown", (ev) => {
  wait = Date.now();

  if (ev.key === "Enter") {
    echo(command.innerHTML, __colors__.green);
    echo();
    return (command.innerHTML = "");
  }

  if (ev.key === "Backspace")
    return (command.innerHTML = command.innerHTML.substring(
      0,
      command.innerHTML.length - 1
    ));
  if (ev.key.length === 1) command.innerHTML += ev.key;
});

const loop = () => {
  requestAnimationFrame(loop);

  cursor.style.height =
    wait + __cursorDelay__ > Date.now()
      ? "23px"
      : `${23 - Math.pow(Math.sin(Date.now() / 300), 4) * 23}px`;
};

requestAnimationFrame(loop);
