function familyTrip(input) {
    let budget = (input[0]);
    let overnightNm = (input[1]);
    let overnightPrice = (input[2]);
    let expences = (input[3]);
    if (overnightNm > 7) {
        overnightPrice = overnightPrice - overnightPrice * 0.05;
    }
    let totaSum = (overnightPrice * overnightNm) + (budget * expences / 100);
    if (budget >= totaSum) {
        console.log(`Ivanovi will be left with ${(budget - totaSum).toFixed(2)} leva after vacation.`)
    } else {
        console.log(`${(totaSum - budget).toFixed(2)} leva needed.`)
    }

}

familyTrip([500, 7, 66, 15])