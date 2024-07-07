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
  return (
    <div className="pt-4">
      <Folder folder={structure} setNavFiles={setNavFiles} />
    </div>
  );
}

export default FileExplorer;
