export function getFileExtension(fileName) {
	const dotIndex = fileName.lastIndexOf(".");
	if (dotIndex === -1 || dotIndex === 0) {
		return "";
	}
	console.log(fileName.substring(dotIndex + 1));
	return fileName.substring(dotIndex + 1);
}
