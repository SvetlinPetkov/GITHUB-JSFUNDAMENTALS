function backToThePast(input) {
    let money = Number(input[0]);
    let year = Number(input[1]);
    let cost = 0;
    let currentAge = 18;
    let currentYear = 1800;
    let yearDiff = year - currentYear;
    for (let index = 0; index <= yearDiff; index++) {
        if (currentYear % 2 === 0) {
            cost += 12000;
        } else {
            cost += 12000 + 50 * currentAge;
        }
        currentYear++
        currentAge++
    }
    if (money >= cost) {
        console.log(`Yes! He will live a carefree life and will have ${(money - cost).toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${(cost - money).toFixed(2)} dollars to survive.`)
    }
}

backToThePast(["50000", "1802"])