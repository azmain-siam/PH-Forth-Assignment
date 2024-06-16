function deleteInvalids(array) {
  let finalArray = [];
  if (Array.isArray(array) === false) {
    return "Invalid Array";
  }
  for (let item of array) {
    if (typeof item === "number" && isNaN(item) === false) {
      finalArray.push(item);
    }
  }
  return finalArray;
}

let output = deleteInvalids({ num: [1, 2, 3] });
console.log(output);
