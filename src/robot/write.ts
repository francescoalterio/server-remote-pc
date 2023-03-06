import robot from "robotjs";

export function write(command: string) {
  console.log(command);
  robot.keyTap(command);
}
