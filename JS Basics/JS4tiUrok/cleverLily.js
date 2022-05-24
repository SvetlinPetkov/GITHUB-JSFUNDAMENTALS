function cleverLily(input) {
    let lilysAge = Number(input[0]);
    let washMashPrice = Number(input[1]);
    let PricePerToy = Number(input[2]);
    let toysNum = 0;
    let savedMoney = 0;
    let takenMoney = 0;
    let addedMoney = 10;
    for (let i = 1; i <= lilysAge; i++) {
        if (i % 2 === 0) {
            savedMoney += addedMoney;
            takenMoney++;
            addedMoney += 10;
        } else {
            toysNum++;
        }
    }
    let moneyFromToys = toysNum * PricePerToy;
    let totalMoney = (savedMoney + moneyFromToys) - takenMoney;
    if (totalMoney >= washMashPrice) {
        console.log(`Yes! ${(totalMoney - washMashPrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washMashPrice - totalMoney).toFixed(2)}`)
    }
}

cleverLily(["21",
"1570.98",
"3"])