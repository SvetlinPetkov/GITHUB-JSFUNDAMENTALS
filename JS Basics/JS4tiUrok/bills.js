function bills(input) {
    let months = Number(input[0]);
    let sumElectricityBill = 0;
    let waterBill = 20;
    let internetBill = 15;
    let otherBill = 0;
    for (let i = 1; i <= months; i++) {
        let electricityBill = Number(input[i]);
        sumElectricityBill += electricityBill;
        otherBill += (electricityBill + waterBill + internetBill) * 1.2;
    }
    let averageBill = (sumElectricityBill + (waterBill * months) + (internetBill * months) + otherBill) / months;
    console.log(`Electricity: ${(sumElectricityBill.toFixed(2))} lv`);
    console.log(`Water: ${((waterBill * months).toFixed(2))} lv`);
    console.log(`Internet: ${((internetBill * months).toFixed(2))} lv`);
    console.log(`Other: ${(otherBill).toFixed(2)} lv`);
    console.log(`Average: ${averageBill.toFixed(2)} lv`);
}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"])