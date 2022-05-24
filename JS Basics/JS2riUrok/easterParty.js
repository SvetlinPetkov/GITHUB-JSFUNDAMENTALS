function easterParty(input) {
    let guestNm = (input[0]);
    let pricePerPerson = (input[1]);
    let budget = (input[2]);
    if ((guestNm >= 10) && (guestNm <= 15)) {
        pricePerPerson = pricePerPerson * 0.85;
    } else if ((guestNm > 15) && (guestNm <= 20)) {
        pricePerPerson = pricePerPerson * 0.80;
    } else if (guestNm > 25) {
        pricePerPerson = pricePerPerson * 0.75;
    }
    let totalPrice = guestNm * pricePerPerson + (budget * 0.1);
    if (budget >= totalPrice) {
        console.log(`It is party time! ${(budget - totalPrice).toFixed(2)} leva left.`)
    } else {
        console.log(`No party! ${(totalPrice - budget).toFixed(2)} leva needed.`)
    }

}

easterParty([8, 25, 340])