function mountainRun(input) {
    let worldRecordSec = Number(input[0]);
    let distaceMet = Number(input[1]);
    let timePerMetSec = Number(input[2]);
    let totalTime = (distaceMet * timePerMetSec) + (Math.floor(distaceMet / 50) * 30);
    if (totalTime < worldRecordSec) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No! He was ${(totalTime - worldRecordSec).toFixed(2)} seconds slower.`)
    }
}

mountainRun([5554.36, 1340, 3.23])