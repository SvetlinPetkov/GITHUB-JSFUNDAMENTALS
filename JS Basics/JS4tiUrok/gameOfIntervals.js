function gameOfIntervals(input) {
    let movesNum = Number(input[0])
    let result = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let p6 = 0;
    for (i = 1; i <= movesNum; i++) {
        let currentNum = Number(input[i]);
        if (currentNum >= 0 && currentNum < 10) {
            currentNum *= 0.2;
            result += currentNum
            p1++
        } else if (currentNum >= 10 && currentNum < 20) {
            currentNum *= 0.3;
            result += currentNum
            p2++
        } else if (currentNum >= 20 && currentNum < 30) {
            currentNum *= 0.4;
            result += currentNum
            p3++
        } else if (currentNum >= 30 && currentNum < 40) {
            currentNum = 50;
            result += currentNum
            p4++
        } else if (currentNum >= 40 && currentNum < 51) {
            currentNum = 100;
            result += currentNum
            p5++
        } else {
            result /= 2;
            p6++
        }
    }
    console.log(result.toFixed(2))
    console.log(`From 0 to 9: ${(p1 / movesNum * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${(p2 / movesNum * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${(p3 / movesNum * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${(p4 / movesNum * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${(p5 / movesNum * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${(p6 / movesNum * 100).toFixed(2)}%`);
}

gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])