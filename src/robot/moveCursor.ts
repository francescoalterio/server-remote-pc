import robot from "robotjs";

robot.setMouseDelay(1);

type Direction = "up" | "down" | "left" | "right" | "cancel";

let interval: any;

function setDirection(direction: Direction): { x: number; y: number } {
  const mouseVelicity = 5;
  const currentMousePosition = robot.getMousePos();
  const data = { x: currentMousePosition.x, y: currentMousePosition.y };
  if (direction === "up") data.y = currentMousePosition.y - mouseVelicity;
  if (direction === "down") data.y = currentMousePosition.y + mouseVelicity;
  if (direction === "left") data.x = currentMousePosition.x - mouseVelicity;
  if (direction === "right") data.x = currentMousePosition.x + mouseVelicity;
  return data;
}

function move(direction: Direction) {
  const { x, y } = setDirection(direction);
  robot.moveMouse(x, y);
}

export function moveCursor(direction: Direction) {
  clearInterval(interval);
  if (direction !== "cancel") {
    interval = setInterval(() => move(direction), 10);
  }
}
