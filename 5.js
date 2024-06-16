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

const out = monthlySavings(100, [900, 2700, 3400]);
console.log(out);
