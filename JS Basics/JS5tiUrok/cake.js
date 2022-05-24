function cake(input) {
    let index = 0;
    let a = Number(input[index]);
    index++;
    let b = Number(input[index]);
    index++;
    let command = input[index];
    let totalPieces = a * b;
    while (command !== "STOP") {
        let pieces = Number(command);
        totalPieces -= pieces;
        if (totalPieces <= 0) {
            console.log(`No more cake left! You need ${Math.abs(totalPieces)} pieces more.`);
            break;
        }
        index++;
        command = input[index];
    }
    if (command === "STOP") {
        console.log(`${totalPieces} pieces are left.`);
    }
}

cake(["10",
"2",
"2",
"4",
"6",
"STOP"])