import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "./constants";
import { buildStructure } from "./helpers";

export const deleteItem = async (
	item,
	structure,
	setStructure,
	setNavFiles
) => {
	const deleteRecursively = folder => {
		if (!folder.dir) return;

		folder.childs = folder.childs.filter(child => child.id !== item.id);
		folder.childs.forEach(deleteRecursively);
	};
	try {
		const response = await axios.delete(`${BASE_URL}/api/delete`, {
			data: { path: item.path },
			headers: {
				"Content-Type": "application/json"
			}
		});
		if (response.data.succeed) {
			const newStructure = { ...structure };
			deleteRecursively(newStructure);
			setStructure(newStructure);
			setNavFiles(item);
		} else {
			toast.error(response.data.output);
		}
	} catch (error) {
		console.error(error);
		console.error(error.response.data);
	}
};

export const handleNavFilesChange = async (
	file,
	isAdd,
	refresh,
	openFiles,
	setOpenFiles,
	setActiveFile
) => {
	if (refresh) {
		setOpenFiles([...openFiles]);
		return;
	}
	if (isAdd) {
		try {
			const response = await axios.put(`${BASE_URL}/api/readFile`, {
				path: file.path
			});
			if (response.data.succeed) {
				file.content = response.data.output;
			} else {
				toast.error(response.data.output);
			}
		} catch (err) {
			console.error(err);
		}
		if (!openFiles.includes(file)) {
			setOpenFiles([...openFiles, file]);
		}
		setActiveFile(file);
	} else {
		const newOpenFiles = openFiles.filter(f => f.id !== file.id);
		if (newOpenFiles.length !== 0) {
			setActiveFile(newOpenFiles[newOpenFiles.length - 1]);
		} else {
			setActiveFile(null);
		}
		setOpenFiles(newOpenFiles);
	}
};

export const handleSaveFileContent = async fileToSave => {
	try {
		const response = await axios.post(`${BASE_URL}/api/save`, {
			filePath: fileToSave.path,
			content: fileToSave.content
		});
		if (!response.data.succeed) {
			toast.error(response.data.output);
		}
	} catch (err) {
		console.error(err);
	}
};

export const handleRunButtonClick = async (activeFile, setOutput, outPut) => {
	if (!activeFile) {
		return;
	}
	try {
		const response = await axios.put(`${BASE_URL}/api/run`, {
			Path: activeFile.path
		});

		setOutput(outPut + response.data.output);
	} catch (err) {
		console.error(err);
	}
};

export const handleTopBarSearch = async (
	path,
	setOpenFiles,
	setActiveFile,
	setFileContent,
	setStructure
) => {
	try {
		const response = await axios.put(`${BASE_URL}/api/getTree`, {
			path
		});
		const newStructure = buildStructure(response.data);
		setOpenFiles([]);
		setActiveFile(null);
		setFileContent("");
		setStructure(newStructure);
	} catch (err) {
		toast.error(err.response.data);
		console.error(err.response.data);
	}
};