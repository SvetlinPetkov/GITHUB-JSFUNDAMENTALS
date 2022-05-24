function poolDay(input){
    let numPeople = Number(input[0]);
    let entryTax = Number(input[1]);
    let priceChair = Number(input[2]);
    let priceUmb = Number(input[3]);
    let taxSum = numPeople * entryTax;
    let sumUmb = Math.ceil(numPeople * 0.5) * priceUmb;
    let sumChair = Math.ceil(numPeople * 0.75) * priceChair;
    let totalSum = taxSum + sumUmb + sumChair
    console.log(`${totalSum.toFixed(2) } lv.`)

}

poolDay(["21", "5.50", "4.40", "6.20"])