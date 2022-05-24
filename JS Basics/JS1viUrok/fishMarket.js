function fishMarket(input){
    let skumriaPerKg = Number(input[0]);
    let cacaPerKg = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);
    let palamudPrice = skumriaPerKg + skumriaPerKg * 0.6;
    let palamudSum = palamudKg * palamudPrice;
    let safridPrice = cacaPerKg + cacaPerKg * 0.8;
    let safridSum = safridKg * safridPrice;
    let midiSum = midiKg * 7.50;
    let totalSum = palamudSum + safridSum + midiSum;

    console.log(totalSum.toFixed(2));

}

fishMarket(["6.90", "4.20", "1.5", "2.5", "1"])