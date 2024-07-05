import { exec } from "child_process";

function execPromise(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
}

class OneCommand {
  static async execute(command) {
    try {
      const output = await execPromise(command);
      return {
        succeed: true,
        output,
        error: "",
      };
    } catch (error) {
      return {
        succeed: false,
        output: error,
        error,
      };
    }
  }

  static async writeFile(path, data) {
    try {
      const output = await execPromise(`echo '${data}' > ${path}`);
      return {
        succeed: true,
        output,
        error: "",
      };
    } catch (error) {
      return {
        succeed: false,
        output: error,
        error,
      };
    }
  }
}

export default OneCommand;
