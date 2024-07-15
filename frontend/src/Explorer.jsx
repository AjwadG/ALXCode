import FileExplorer from "./components/FileExplorer";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import "./assets/css/index.css"


const SearchInput = {
  border: "1px solid #4f5966",
  fontSize: "12px",
  borderRadius: "3px",
};
const ExplorerStyle = {
  height: "calc(100% - 24px)"
}

const FixedSize = {
  width: "22%",
  height: "100%",

}

function Explorer({ setNavFiles }) {
  return (
    <div style={FixedSize}>
    <ResizableBox
      className="resizable-box h-full"
      width={Infinity}
      minConstraints={[Infinity, Infinity]}
      maxConstraints={[Infinity, Infinity]}
      axis="x"
      handle={
        <span className="custom-handle" />
      }
      resizeHandles={["e"]}
    >
      <div className="bg-main overflow-y-auto overflow-x-auto border-r-2 p-2 border-t-2 border-slate-700" style={ExplorerStyle}>
        <input
          type="search"
          placeholder="Ex: app.js"
          className="w-full bg-transparent p-1 text-white outline-none text-sm"
        />
        <FileExplorer setNavFiles={setNavFiles} />
      </div>
    </ResizableBox>
    </div>
  );
}

export default Explorer;
