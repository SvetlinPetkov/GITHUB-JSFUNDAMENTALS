function shopping(input){
    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);
    let gpuSum = gpu * 250;
    let totalSum = gpuSum + ((gpuSum * 0.35) * cpu) + ((gpuSum * 0.10) * ram);
    if(gpu > cpu){
        totalSum = totalSum * 0.85;
    }
    if(budget >= totalSum){
        console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`)
    }else{
        console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`)
    }
}

shopping(["920.45",
"3",
"1",
"1"])