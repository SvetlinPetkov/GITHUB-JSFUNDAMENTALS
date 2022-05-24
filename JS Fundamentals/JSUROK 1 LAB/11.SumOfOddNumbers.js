function sumOfOddNumbers(num){
    let counter = 0;
    let res = 0;
    for(let i = 1; i <= 100; i+=2){
        counter++;
        res+=i;
        console.log(i);
        if(counter === num){
            console.log(`Sum: ${res}`);
            break;
        }
    }
}

sumOfOddNumbers(5)
sumOfOddNumbers(3)