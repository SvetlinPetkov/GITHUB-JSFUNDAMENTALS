function skeleton(input) {
    let controlMin = Number(input[0]);
    let controlSec = Number(input[1]);
    let length = Number(input[2]);
    let secPerHmeter = Number(input[3]);
    let controlTime = controlMin * 60 + controlSec;
    let slowDownTotal = (length / 120) * 2.5;
    let playerTime = (length / 100) * secPerHmeter - slowDownTotal;
    if (playerTime <= controlTime) {
        console.log(`Marin Bangiev won an Olympic quota!`);
        console.log(`His time is ${(playerTime).toFixed(3)}.`)
    } else {
        console.log(`No, Marin failed! He was ${(playerTime - controlTime).toFixed(3)} second slower.`)
    }

}

skeleton([1, 20, 1546, 12])