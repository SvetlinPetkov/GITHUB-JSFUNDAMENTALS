function lunchBreak(input){
    let name = (input[0]);
    let epizodeTime = (input[1]);
    let breakTime = (input[2]);
    let leftTime = breakTime - (breakTime / 8) - (breakTime / 4);
    if(leftTime >= epizodeTime){
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(leftTime - epizodeTime)} minutes free time.`)
    }else{
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(epizodeTime - leftTime)} more minutes.`)
    }

}

lunchBreak(["Teen Wolf",
"48",
"60"])