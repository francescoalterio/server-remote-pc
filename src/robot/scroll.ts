import robot from "robotjs";
import { moveCursor } from "./moveCursor";

export function scroll(direction: "up" | "down" | "cancel"): void {
  if (direction !== "cancel") {
    robot.mouseToggle("down", "left");
    if (direction === "up") moveCursor("up", 3);
    else if (direction === "down") moveCursor("down", 3);
  } else {
    moveCursor("cancel");
    robot.mouseToggle("up", "left");
  }
}
