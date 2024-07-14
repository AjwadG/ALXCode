import React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import "./assets/css/index.css";

function Terminal() {
  const ws = new WebSocket("ws://localhost:3000/ws");

  ws.onopen = function () {
    appendOutput("Connected to the server.\n");
  };

  ws.onmessage = function (event) {
    appendOutput(event.data);
  };

  ws.onclose = function () {
    appendOutput("Connection closed.\n");
  };

  ws.onerror = function (error) {
    appendOutput("Error: " + error.message + "\n");
  };

  function sendCommand() {
    // here to send the command to the back end allways trim the input
    // const command = commandInput.value.trim();
    // if (command !== "") {
    //   ws.send(command);
    //   appendOutput(`$ ${command}\n`);
    // }
  }

  function appendOutput(message) {
    // you logic to append to the terminal
    console.log(message); // just remove this later
  }

  return (
    <ResizableBox
      className="resizable-box absolute bottom-2 w-full bg-second border-t-2 border-slate-600 text-white p-2"
      width={Infinity}
      height={250}
      minConstraints={[Infinity, 50]}
      maxConstraints={[Infinity, 500]}
      axis="y"
      handle={<span className="custom-vertical-handle" />}
      resizeHandles={["n"]}
    >
      Terminal
    </ResizableBox>
  );
}

export default Terminal;
