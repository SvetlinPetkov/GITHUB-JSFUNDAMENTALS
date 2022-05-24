function equalPairs(input){
    let pairs = Number(input[0]);
    let firstNumber = 0;
    let secondNumber = 0;
    let totalPairSum = 0;
    for(let i = 1; i < input.length; i++){
        let currentNumber = Number(input[i]);
        if(i % 2 === 1){
            firstNumber = currentNumber;
        }else{
            secondNumber = currentNumber;
        }
        totalPairSum = firstNumber + secondNumber;
        console.log(diffPairSum2)

    }
}

equalPairs(["3", "1", "2", "0", "3", "4", "-1"])