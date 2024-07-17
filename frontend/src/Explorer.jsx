import React, { useState } from "react";
import FileExplorer from "./components/FileExplorer";
import { ResizableBox } from "react-resizable";
import { useQuery } from "react-query";
import "react-resizable/css/styles.css";
import "./assets/css/index.css";

const SearchInput = {
  border: "1px solid #4f5966",
  fontSize: "12px",
  borderRadius: "3px",
};
const ExplorerStyle = {
  height: "calc(100% - 24px)",
};

const FixedSize = {
  width: "22%",
  height: "100%",
};

const NOT_FOUND = {
  name: "NOT FOUND",
  childs: [],
  dir: true,
  parent: null,
  path: "",
};

const BASE_URL = "http://localhost:3000";
const curretnPath = "/home/ajwadg/ajwad/alx/ALXCode"; // edit this

function buildStructure(rootNode) {
  function buildChilds(parent) {
    parent.childs = parent.childs.map((child) => {
      child.match = true;
      child.parent = parent;
      if (child.dir) {
        child.childs = buildChilds(child);
      }
      return child;
    });
    return parent.childs;
  }

  rootNode.childs = rootNode.childs.map((node) => {
    node.parent = rootNode;
    node.match = true;
    if (node.dir) {
      node.childs = buildChilds(node);
    }
    return node;
  });
  rootNode.match = true;

  return rootNode;
}

function Explorer({ setNavFiles }) {
  const [structure, setStructure] = useState(NOT_FOUND);

  useQuery("structure", () => {
    fetch(`${BASE_URL}/api/getTree`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: curretnPath,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const fileStructure = buildStructure(data);
        setStructure(fileStructure);
      })
      .catch((error) => {
        setStructure(NOT_FOUND);
        console.error(error);
      });
  });

  const handleSearchChange = (event) => {
    const searchQuery = event.target.value;
    const resetMatch = (node) => {
      node.match = true;
      if (node.dir) {
        node.childs.map((child) => resetMatch(child));
      }
    };
    const filterStructure = (node, query) => {
      if (node.name.toLowerCase().includes(query.toLowerCase())) {
        node.match = true;
        return true;
      }

      if (node.dir) {
        const tmpNode = node.childs.filter((child) =>
          filterStructure(child, query)
        );
        node.match = tmpNode.length > 0;
        return node.match;
      }

      node.match = false;
      return false;
    };

    resetMatch(structure);
    if (searchQuery.trim() !== "") {
      structure.childs.map(
        (child) => (child.match = filterStructure(child, searchQuery))
      );
    }
    setStructure({ ...structure });
  };
  return (
    <div style={FixedSize}>
      <ResizableBox
        className="resizable-box h-full"
        width={Infinity}
        minConstraints={[Infinity, Infinity]}
        maxConstraints={[Infinity, Infinity]}
        axis="x"
        handle={<span className="custom-handle" />}
        resizeHandles={["e"]}
      >
        <div
          className="bg-main overflow-y-auto overflow-x-auto border-r-2 p-2 border-t-2 border-slate-700"
          style={ExplorerStyle}
        >
          <input
            type="search"
            placeholder="Ex: app.js"
            className="w-full bg-transparent p-1 text-white outline-none text-sm"
            onChange={handleSearchChange}
          />
          <FileExplorer
            setNavFiles={setNavFiles}
            structure={structure}
            setStructure={setStructure}
          />
        </div>
      </ResizableBox>
    </div>
  );
}

export default Explorer;
