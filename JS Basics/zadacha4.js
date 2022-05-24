function zadacha4(input){
    let compCount = Number(input[0]);
    let sum = 0;
    let sumRaiting = 0;
    let avrRaiting= 0;
    for(let i = 1; i <= compCount; i++){
        let num = Number(input[i]);
        let raiting = num % 10;
        let tradeNum = Math.floor(num / 10);
        if(raiting === 2){
            tradeNum *= 0;
        }else if(raiting === 3){
            tradeNum *= 0.5;
        }else if(raiting === 4){
            tradeNum *= 0.7;
        }else if(raiting === 5){
            tradeNum *= 0.85;
        }else if(raiting === 6){
            tradeNum *= 1;
        }
        sumRaiting += raiting;
        sum += tradeNum;
    }
    avrRaiting = sumRaiting / compCount;
    console.log(sum.toFixed(2));
    console.log(avrRaiting.toFixed(2));
}

zadacha4(["5",
"122",
"156",
"202",
"214",
"185"])