import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "./constants";

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
