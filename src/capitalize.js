function capitalize(str) {
  if (typeof(str) !== "string") throw new Error("Input must be a string");
  if (str.length === 0) return "";
  return str[0].toUpperCase() + str.slice(1);
}

export default capitalize;