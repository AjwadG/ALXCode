import { spawn } from "child_process";

class chell {
  constructor() {
    this.shell = spawn("bash");
  }
  async runComand(comand) {
    try {
      const stdout = await this._execComand(comand);
      return stdout;
    } catch (error) {
      return error;
    }
  }

  _execComand(command) {
    return new Promise((resolve, reject) => {
      if (!command.startsWith("cd")) {
        this.shell.stdout.once("data", (data) => {
          resolve(data.toString());
        });

        this.shell.stderr.once("data", (data) => {
          resolve(data.toString());
        });
      }
      this.shell.stdin.write(`${command}\n`, (err) => {
        if (err) {
          return reject(err.toString());
        }
      });
      if (command.startsWith("cd")) {
        resolve(command);
      }
    });
  }
}

export default chell;
