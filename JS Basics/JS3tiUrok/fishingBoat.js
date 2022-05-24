function fishingBoat(input) {
    budget = Number(input[0]);
    season = input[1];
    numFisherman = Number(input[2]);
    let rent = 0;
    if (season === 'Spring') {
        rent = 3000;
    } else if (season === 'Summer' || season === 'Autumn') {
        rent = 4200;
    } else if (season === 'Winter') {
        rent = 2600;
    }
    if (numFisherman <= 6) {
        rent *= 0.9;
    } else if (numFisherman >= 7 && numFisherman <= 11) {
        rent *= 0.85;
    } else {
        rent *= 0.75;
    }
    if (numFisherman % 2 == 0 && season !== 'Autumn') {
        rent *= 0.95;
    }
    if (budget >= rent) {
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`)
    }
}

fishingBoat(["3000",
    "Summer",
    "11"])