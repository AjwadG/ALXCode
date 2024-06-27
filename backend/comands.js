import { spawn } from "child_process";

const shell = spawn("bash");

export default async function runComand(comand) {
  try {
    const stdout = await execComand(comand);
    return stdout;
  } catch (error) {
    return error;
  }
}

function execComand(command) {
  return new Promise((resolve, reject) => {
    if (!command.startsWith("cd")) {
      shell.stdout.once("data", (data) => {
        resolve(data.toString());
      });

      shell.stderr.once("data", (data) => {
        resolve(data.toString());
      });
    }
    shell.stdin.write(`${command}\n`, (err) => {
      if (err) {
        return reject(err.toString());
      }
    });
    if (command.startsWith("cd")) {
      resolve(command);
    }
  });
}
