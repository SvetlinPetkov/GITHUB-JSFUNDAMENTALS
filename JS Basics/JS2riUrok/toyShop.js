function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzlesNm = Number(input[1]);
    let dollNm = Number(input[2]);
    let bearNm = Number(input[3]);
    let minionNm = Number(input[4]);
    let trucksNm = Number(input[5]);
    let sumPrice = (puzzlesNm * 2.60) + (dollNm * 3) + (bearNm * 4.10) + (minionNm * 8.20) + (trucksNm * 2);
    let toyNm = puzzlesNm + dollNm + bearNm + minionNm + trucksNm;
    if (toyNm >= 50) {
        sumPrice = sumPrice * 0.75;
    }
    let rent = sumPrice * 0.1;
    let profit = sumPrice - rent;
    if (profit >= tripPrice) {
        console.log(`Yes! ${(profit - tripPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(tripPrice - profit).toFixed(2)} lv needed.`)

    }

}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])