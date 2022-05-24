function maidenParty(input){
    let budget = Number(input[0]);
    let loveCount = Number(input[1]);
    let roseCount = Number(input[2]);
    let keyConunt = Number(input[3]);
    let picsCount = Number(input[4]);
    let luckCount = Number(input[5]);
    let sum = loveCount * 0.60 + roseCount * 7.20 + keyConunt * 3.60 + picsCount * 18.20 + luckCount * 22;
    let artCount = loveCount + roseCount + keyConunt + picsCount + luckCount;
    if(artCount >= 25){
        sum *= 0.65;
    }
    let finalSum = sum * 0.9;
    if(budget < finalSum){
        console.log(`Yes! ${(finalSum - budget).toFixed(2)} lv left.`);
    }else{
        console.log(`Not enough money! ${(budget - finalSum).toFixed(2)} lv needed.`);
    }
}

maidenParty(["320",
"8",
"2",
"5",
"5",
"1"])