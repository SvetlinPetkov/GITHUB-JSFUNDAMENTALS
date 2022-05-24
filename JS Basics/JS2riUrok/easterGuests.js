function easterGuests(input) {
    let guestNm = Number(input[0]);
    let budget = Number(input[1]);
    let easterBreadNm = Math.ceil(guestNm / 3);
    let eggsNm = guestNm * 2;
    let totalSum = easterBreadNm * 4 + eggsNm * 0.45;
    if (budget >= totalSum) {
        console.log(`Lyubo bought ${easterBreadNm} Easter bread and ${eggsNm} eggs.`)
        console.log(`He has ${(budget - totalSum).toFixed(2)} lv. left.`)
    } else {
        console.log(`Lyubo doesn't have enough money.`)
        console.log(`He needs ${(totalSum - budget).toFixed(2)} lv. more.`)
    }

}

easterGuests([9, 12])