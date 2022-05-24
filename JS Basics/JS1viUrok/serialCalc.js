function serialCalc(input){
    let name = (input[0]);
    let season = Number(input[1]);
    let episode = Number(input[2]);
    let time = Number(input[3])
    let timeSumm = (time + (time * 0.2)) * season * episode + season * 10;

    console.log(`Total time needed to watch the ${name} series is ${Math.floor(timeSumm)} minutes.`)

}

serialCalc(["Lucifer", "3", "18", "55"])