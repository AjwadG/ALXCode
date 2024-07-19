export const BASE_URL = document.location.origin.includes("localhost")
  ? "http://localhost:3000"
  : document.location.origin;

export const NOT_FOUND = {
  name: "NOT FOUND",
  childs: [],
  dir: true,
  parent: null,
  path: "",
};
