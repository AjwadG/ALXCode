import { useState } from "react";
import Folder from "./Folder";

const initialStructure = {
  id: 1,
  name: "root",
  isFolder: true,
  children: [
    {
      id: 2,
      name: "src",
      isFolder: true,
      children: [
        {
          id: 4,
          name: "index.js",
          isFolder: false,
          content: "console.log('Hello from index!')",
        },
        {
          id: 6,
          name: "App.js",
          isFolder: false,
          content: "console.log('Hello from App!')",
        },
      ],
    },
    {
      id: 3,
      name: "public",
      isFolder: true,
      children: [
        {
          id: 5,
          name: "index.html",
          isFolder: false,
          content: "<h1>Hello World!</h1>",
        },
      ],
    },
  ],
};


function FileExplorer({ setNavFiles }) {
  const [structure, setStructure] = useState(initialStructure);

  const deleteFile = (file) => {
    const deleteRecursively = (folder) => {
      if (!folder.isFolder) return;

      folder.children = folder.children.filter(child => child.id !== file.id);
      folder.children.forEach(deleteRecursively);
    };

    const newStructure = { ...structure };
    deleteRecursively(newStructure);
    setStructure(newStructure);
  };

  const deleteItem = (item) => {
    const deleteRecursively = (folder) => {
      if (!folder.isFolder) return;

      folder.children = folder.children.filter(child => child.id !== item.id);
      folder.children.forEach(deleteRecursively);
    };

    const newStructure = { ...structure };
    deleteRecursively(newStructure);
    setStructure(newStructure);
  };

  return (
    <div className="pt-4">
      <Folder folder={structure} setNavFiles={setNavFiles} onDelete={deleteItem} />
    </div>
  );
}

export default FileExplorer;
