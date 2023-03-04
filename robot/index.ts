import robot from "robotjs";

robot.setMouseDelay(1);

type Direction = "up" | "down" | "left" | "right";

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

export default function move(direction: Direction) {
  console.log("MOVE CURSOR FUNCTION");
  const { x, y } = setDirection(direction);
  robot.moveMouse(x, y);
}
