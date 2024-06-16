function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number";
  } else {
    let profit = ticketSale * 120 - (500 + 8 * 50);
    return profit;
  }
}


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


function password(obj) {
  const name = obj.name;
  const birthYear = obj.birthYear;
  const capSiteName =
    obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);

  if (Object.keys(obj).length < 3 || obj.birthYear.toString().length < 4) {
    return "invalid";
  }

  const passStucture = capSiteName + "#" + name + "@" + birthYear;
  return passStucture;
}


function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) === false || typeof livingCost !== "number") {
    return "invalid input";
  }

  let totalIncome = 0;

  for (let val of arr) {
    if (val >= 3000) {
      totalIncome += val - val * 0.2;
    } else {
      totalIncome += val;
    }
  }

  let savings = totalIncome - livingCost;
  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}
