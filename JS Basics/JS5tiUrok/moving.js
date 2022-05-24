function moving(input){
    let index = 0;
    let a = Number(input[index]);
    index++;
    let b = Number(input[index]);
    index++;
    let c = Number(input[index]);
    index++;
    let command = input[index];
    let volume = a * b * c;
    while(command !== "Done"){
        let space = command;
        volume -= space;
        if(volume <= 0){
            console.log(`No more free space! You need ${Math.abs(volume)} Cubic meters more.`);
            break;
        }
        index++;
        command = input[index];
    } 
    if(command === "Done"){
        console.log(`${volume} Cubic meters left.`);
    } 
}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])