function workout(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let kmPerDay = Number(input[index]);
    let sumKm = kmPerDay;
    index++
    for (let i = 0; i < days; i++) {
        let p = Number(input[index]);
        index++
        kmPerDay = kmPerDay + kmPerDay * p / 100
        sumKm += kmPerDay
    }
    let diff = Math.abs(1000 - sumKm)
    if (sumKm >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(diff)} more kilometers!`);
    } else if (sumKm < 1000) {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(diff)} more kilometers`);
    }
}

workout(["4",
    "100",
    "30",
    "50",
    "60",
    "80"])