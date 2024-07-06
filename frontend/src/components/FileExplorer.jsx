import { useState } from "react";
import Folder from "./Folder";

const initialStructure = {
	name: "root",
	isFolder: true,
	children: [
		{
			name: "src",
			isFolder: true,
			children: [
				{ name: "index.js", isFolder: false },
				{ name: "App.js", isFolder: false }
			]
		},
		{
			name: "public",
			isFolder: true,
			children: [{ name: "index.html", isFolder: false }]
		}
	]
};

function FileExplorer() {
	const [structure, setStructure] = useState(initialStructure);

	return (
		<div className="pt-4">
			<Folder folder={structure} />
		</div>
	);
}

export default FileExplorer;
