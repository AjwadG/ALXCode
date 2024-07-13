import FileExplorer from "./components/FileExplorer";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import "./assets/css/index.css"

const SearchInput = {
  border: "1px solid #4f5966",
  fontSize: "12px",
  borderRadius: "3px",
};

function Explorer({ setNavFiles }) {
  return (
    <ResizableBox
      className="resizable-box"
      width={300}
      height={Infinity}
      minConstraints={[200, Infinity]}
      maxConstraints={[600, Infinity]}
      axis="x"
      handle={
        <span className="custom-handle" />
      }
      resizeHandles={["e"]}
    >
      <div className="bg-main h-full border-r-2 p-2 border-t-2 border-slate-700">
        <input
          type="search"
          placeholder="Ex: app.js"
          className="w-full bg-transparent p-1 text-white outline-none text-sm"
        />
        <FileExplorer setNavFiles={setNavFiles} />
      </div>
    </ResizableBox>
  );
}

export default Explorer;
