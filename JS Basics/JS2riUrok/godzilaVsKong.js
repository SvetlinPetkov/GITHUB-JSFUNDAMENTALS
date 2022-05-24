function godzilaVsKong(input) {
    let budget = Number(input[0]);
    let statistsNm = Number(input[1]);
    let pricePerStatist = Number(input[2]);
    if (statistsNm > 150) {
        pricePerStatist = pricePerStatist - pricePerStatist * 0.1;
    }
    let totalSum = (budget * 0.1) + (pricePerStatist * statistsNm);
    if (totalSum <= budget) {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(budget - totalSum).toFixed(2)} leva left.`)
    } else {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalSum - budget).toFixed(2)} leva more.`)
    }

}

godzilaVsKong(["9587.88",
    "222",
    "55.68"])