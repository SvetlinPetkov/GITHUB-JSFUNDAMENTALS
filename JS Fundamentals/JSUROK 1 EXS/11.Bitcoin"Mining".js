function bitcoinMining(input) {
    let goldSum = 0;
    let dayCounter = 0;
    let bitCounter = 0;
    let firstBitCoin = 0;
    let bitCoin = 11949.16;
    for (let i = 0; i < input.length; i++) {
        dayCounter++;
        let goldPerDay = input[i];
        if (dayCounter % 3 === 0) {
            goldPerDay *= 0.7;
        }
        let goldPricePerDay = goldPerDay * 67.51;
        goldSum += goldPricePerDay;
        if (goldSum >= bitCoin) {
            for (let j = bitCoin; j < goldSum; j++) {
                bitCounter++
                if (bitCounter === 1) {
                    firstBitCoin = dayCounter;
                }
                goldSum -= bitCoin;
            }
        }
    }
    console.log(`Bought bitcoins: ${bitCounter}`);
    if (bitCounter > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitCoin}`);
    }
    console.log(`Left money: ${goldSum.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300])