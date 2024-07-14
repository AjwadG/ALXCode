import React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import "./assets/css/index.css"

function Output() {
    return (
        <ResizableBox
            className="resizable-box absolute bottom-2 w-full bg-second border-t-2 border-slate-600 text-white p-2"
            width={Infinity}
            height={250}
            minConstraints={[Infinity, 50]}
            maxConstraints={[Infinity, 500]}
            axis="y"
            handle={
                <span className="custom-vertical-handle" />
            }
            resizeHandles={["n"]}
        >
            Output
        </ResizableBox>
    );
}

export default Output;