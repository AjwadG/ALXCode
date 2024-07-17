export function getFileExtension(fileName) {
  const dotIndex = fileName.lastIndexOf(".");
  if (dotIndex === -1 || dotIndex === 0) {
    return "";
  }
  return fileName.substring(dotIndex + 1);
}
