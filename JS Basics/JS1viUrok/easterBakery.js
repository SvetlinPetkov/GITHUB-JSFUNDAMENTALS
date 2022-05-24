function easterBakery(input) {
    let flourPerKg = (input[0]);
    let flourKg = (input[1]);
    let sugarKg = (input[2]);
    let eggsPackNm = (input[3]);
    let yeast = (input[4]);
    let totalSum = (flourPerKg * 0.75 * sugarKg) + (flourKg * flourPerKg) + (flourPerKg * 1.10 * eggsPackNm) +
        ((flourPerKg * 0.75) * 0.2 * yeast);
    console.log(totalSum.toFixed(2))
}

easterBakery([50, 10, 3.5, 6, 1])