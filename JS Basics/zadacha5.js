function zadacha5(input) {
    let index = 0;
    let command = input[index];
    index++
    let maxScore = Number.MIN_SAFE_INTEGER;
    let bestPlayer = ""
    let condition = false;
    while (command !== "END") {
        let name = command;
        let score = Number(input[index]);
        index++
        if (maxScore < score) {
            maxScore = score;
            bestPlayer = name;
            if (maxScore >= 10) {
                condition = true;
            }
        }
        if(condition){
            break;
        }
        command = input[index];
        index++
    }
    console.log(`${bestPlayer} is the best player!`);
    if (maxScore >= 3) {
        console.log(`He has scored ${maxScore} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxScore} goals.`);
    }
}

zadacha5(["Neymar",
"2",
"Ronaldo",
"3",
"Messi",
"3",
"END"])