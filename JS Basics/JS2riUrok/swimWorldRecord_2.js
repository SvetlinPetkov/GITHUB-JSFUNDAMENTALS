function swimRecord(input) {
    let time = Number(input[0]);
    let distance = Number(input[1]);
    let timePerMeter = Number(input[2]);
    let totalSec = distance * timePerMeter;
    let delay = Math.floor(distance / 15) * 12.5;
    let totalTime = totalSec + delay;
    if (totalTime < time) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(totalTime - time).toFixed(2)} seconds slower.`)
    }

}

swimRecord(["55555.67",
    "3017",
    "5.03"])