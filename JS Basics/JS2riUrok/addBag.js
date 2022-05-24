function addBag(input) {
    let luggageOver20 = Number(input[0]);
    let luggageKg = Number(input[1]);
    let daysTillTrip = Number(input[2]);
    let luggageNm = Number(input[3]);
    if (luggageKg < 10) {
        luggageOver20 = luggageOver20 * 0.20;
    } else if ((luggageKg >= 10) && (luggageKg <= 20)) {
        luggageOver20 = luggageOver20 * 0.50;
    } else {
        luggageOver20 = luggageOver20;
    }
    if (daysTillTrip < 7) {
        luggageOver20 = luggageOver20 * 1.40;
    } else if ((daysTillTrip >= 7) && (daysTillTrip <= 30)) {
        luggageOver20 = luggageOver20 * 1.15;
    } else {
        luggageOver20 = luggageOver20 * 1.10;
    }
    let totalSum = luggageOver20 * luggageNm;
    console.log(`The total price of bags is: ${totalSum.toFixed(2)} lv.`)

}

addBag([30, 18, 15, 2])