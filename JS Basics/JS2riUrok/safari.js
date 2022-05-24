function safari(input) {
    let budget = Number(input[0]);
    let fuelLtr = Number(input[1]);
    let dayFromWeeк = (input[2]);
    let totalSum = fuelLtr * 2.10 + 100;
    if (dayFromWeeк === "Saturday") {
        totalSum = totalSum * 0.9;
    } else if (dayFromWeeк === "Sunday") {
        totalSum = totalSum * 0.8;
    }
    if (budget >= totalSum) {
        console.log(`Safari time! Money left: ${(budget - totalSum).toFixed(2)} lv.`)
    } else {
        console.log(`Not enough money! Money needed: ${(totalSum - budget).toFixed(2)} lv.`)
    }
}

safari(["120",
    "30",
    "Saturday"])