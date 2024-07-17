import { FaTerminal } from "react-icons/fa";
import React, { useState, useEffect, useRef } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import "./assets/css/index.css";

const BASE_URL = document.location.origin.includes("localhost")
  ? "http://localhost:3000"
  : document.location.origin;
const wsURL = BASE_URL.split(":")[1];
const originalPort = BASE_URL.split(":")[2];
const mapedPort = wsURL.includes("localhost") ? originalPort : 9999;
const ws = new WebSocket(`ws://${wsURL}:${mapedPort}/ws`);

function Terminal() {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");

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

  const terminalRef = useRef(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <ResizableBox
      className="resizable-box overflow-auto p-4 absolute bottom-2 w-full bg-second border-t-2 border-slate-600 text-white"
      width={Infinity}
      height={250}
      minConstraints={[Infinity, 50]}
      maxConstraints={[Infinity, 500]}
      axis="y"
      handle={<span className="custom-vertical-handle" />}
      resizeHandles={["n"]}
    >
      <div
        ref={terminalRef}
        className="terminal-content overflow-auto max-h-full"
      >
        <pre className="output">{output}</pre>
        <div className="flex justify-center items-center mt-2">
          <span className="prompt mr-2">
            <FaTerminal />
          </span>
          <input
            className="w-full bg-transparent p-1 text-white outline-none text-sm"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendCommand();
              }
            }}
          />
        </div>
      </div>
    </ResizableBox>
  );
}

export default Terminal;
