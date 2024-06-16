function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  } else if (
    name[name.length - 1] === "A" ||
    name[name.length - 1] === "a" ||
    name[name.length - 1] === "y" ||
    name[name.length - 1] === "Y" ||
    name[name.length - 1] === "i" ||
    name[name.length - 1] === "I" ||
    name[name.length - 1] === "e" ||
    name[name.length - 1] === "E" ||
    name[name.length - 1] === "O" ||
    name[name.length - 1] === "o" ||
    name[name.length - 1] === "u" ||
    name[name.length - 1] === "U" ||
    name[name.length - 1] === "w" ||
    name[name.length - 1] === "W"
  ) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

let output = checkName(["Rashed"]);
console.log(output);
