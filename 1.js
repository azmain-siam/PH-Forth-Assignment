function calculateMoney(ticketSale) {
  if (ticketSale < 0) {
    return "Invalid Number";
  } else {
    let profit = ticketSale * 120 - (500 + 8 * 50);
    return profit;
  }
}

const gross = calculateMoney(-130);
console.log(gross);
