import React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import "./assets/css/index.css";

function Output({ outPut }) {
  return (
    <ResizableBox
      className="resizable-box overflow-auto absolute bottom-2 w-full bg-second  text-white"
      width={Infinity}
      height={250}
      minConstraints={[Infinity, 50]}
      maxConstraints={[Infinity, 500]}
      axis="y"
      handle={<span className="custom-vertical-handle" />}
      resizeHandles={["n"]}
    >
      <div className="bg-green-500 p-2 text-xs uppercase">Output</div>
      <pre className="output p-2">{outPut}</pre>
    </ResizableBox>
  );
}

export default Output;
