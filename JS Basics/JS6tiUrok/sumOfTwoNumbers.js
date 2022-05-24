function sumOfTwoNumbers(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isFound = false;
    for (let a = firstNumber; a <= secondNumber; a++) {
        for (let b = firstNumber; b <= secondNumber; b++) {
            counter++
            if (a + b === magicNumber) {
                console.log(`Combination N:${counter} (${a} + ${b} = ${magicNumber})`);
                isFound = true;
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

sumOfTwoNumbers(["88",
"888",
"1000"])