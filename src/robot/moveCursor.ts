import robot from "robotjs";

robot.setMouseDelay(1);

type Direction = "up" | "down" | "left" | "right" | "cancel";

let interval: any;

function setDirection(
  direction: Direction,
  mouseVelocity: number
): { x: number; y: number } {
  const currentMousePosition = robot.getMousePos();
  const data = { x: currentMousePosition.x, y: currentMousePosition.y };
  if (direction === "up") data.y = currentMousePosition.y - mouseVelocity;
  if (direction === "down") data.y = currentMousePosition.y + mouseVelocity;
  if (direction === "left") data.x = currentMousePosition.x - mouseVelocity;
  if (direction === "right") data.x = currentMousePosition.x + mouseVelocity;
  return data;
}

function move(direction: Direction, mouseVelocity: number) {
  const { x, y } = setDirection(direction, mouseVelocity);
  robot.moveMouse(x, y);
}

export function moveCursor(direction: Direction, mouseVelocity: number = 5) {
  clearInterval(interval);
  if (direction !== "cancel") {
    interval = setInterval(() => move(direction, mouseVelocity), 10);
  }
}
