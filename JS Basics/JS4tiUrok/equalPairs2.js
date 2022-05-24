function equalPairs(input){
    let index = 0;
    let equalNum = Number(input[index]);
    index++
    let firstNumber = 0;
    let secondNumber = 0;
    let sumPairNum = 0;
    let diffPairNum = 0;
    for(let i = 1; i <= equalNum; i++){
        firstNumber = Number(input[index]);
        index++
        secondNumber = Number(input[index]);
        index++
    }
    sumPairNum = firstNumber + secondNumber;
    diffPairNum = Math.abs(firstNumber - secondNumber);
    console.log(sumPairNum)
}

equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"])