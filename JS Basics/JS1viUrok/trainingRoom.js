function trainingRoom(input){
    let hightCm = Number(input[0]) * 100;
    let wideCm = Number(input[1]) * 100;
    let wideCount = Math.floor((wideCm - 100) / 70);
    let hightCount = Math.floor(hightCm / 120);
    let count = (wideCount * hightCount) - 3; 
    console.log(count)

}

trainingRoom(["15", "8.9"])