import React,  { useState } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import "./assets/css/index.css";

function Terminal() {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");

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
    const command = inputValue.trim();
    if (command !== "") {
      ws.send(command);
      appendOutput(`$ ${command}\n`);
      setInputValue("");
    }
  }

  
  function appendOutput(message) {
    setOutput((prevOutput) => prevOutput + message);
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
            <div>
        <pre>{output}</pre>
        <div>
          <input className="w-full bg-transparent p-1 text-white outline-none text-sm"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendCommand();
              }
            }}
          />
          <button onClick={sendCommand}>Send</button>
        </div>
      </div>
    </ResizableBox>
  );
}

export default Terminal;
