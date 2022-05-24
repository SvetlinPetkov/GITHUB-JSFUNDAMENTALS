function goldMine(input) {
    let index = 0;
    let locationCount = Number(input[index]);
    index++;
    let sum = 0;

    for (let i = 0; i < locationCount; i++) {

        let avgIncome = Number(input[index]);
        index++;
        let days = Number(input[index]);
        index++;
        for (let n = 0; n < days; n++) {
            let currentIncome = Number(input[index]);
            index++;
            sum += currentIncome;
        }
        let avg = sum / days
        if (avg >= avgIncome) {
            console.log(`Good job! Average gold per day: ${avg.toFixed(2)}.`);
        } else {
            console.log(`You need ${(avgIncome - avg).toFixed(2)} gold.`);
        }
        sum = 0
    }
}
goldMine(["1",
    "5",
    "3",
    "10",
    "1",
    "3"])