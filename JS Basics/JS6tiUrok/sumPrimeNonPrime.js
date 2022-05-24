function sumPrimeNonPrime(input){
    let index = 0;
    let command = input[index];
    let primeSum = 0;
    let nonPrimeSum = 0;
    let isPrime = false;
    while(command !== "stop"){
        let currentNum = Number(command);
        for(let i = 2; i < currentNum; i++){
            if(currentNum % i === 0){
                nonPrimeSum += currentNum;
            }else{
                isPrime = true;
            }
            if(currentNum < 0){
                continue;
            }
        }
        if(isPrime){
            primeSum += currentNum;
        }
        index++;
        command = input[index];
        currentNum = 0;
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`);
}

sumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])