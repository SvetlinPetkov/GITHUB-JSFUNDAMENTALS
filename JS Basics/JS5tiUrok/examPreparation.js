function examPreparation(input) {
    let index = 0;
    let badGradeCount = Number(input[index]);
    index++;
    command = input[index];
    index++;
    let counter = 0;
    let sumGrade = 0;
    let problemCounter = 0;
    let name = ""
    let isNeedABrake = false;
    while (command !== "Enough") {
        problemCounter++
        name = command;
        let grade = Number(input[index]);
        index++;

        if (grade <= 4) {
            counter++;
            if (counter >= badGradeCount) {
                isNeedABrake = true;
                console.log(`You need a break, ${badGradeCount} poor grades.`);
                break;
            }
        }
        sumGrade += grade;
        command = input[index];
        index++
    }
    if (!isNeedABrake) {
        let avrGrade = sumGrade / problemCounter;
        console.log(`Average score: ${avrGrade.toFixed(2)}`);
        console.log(`Number of problems: ${problemCounter}`);
        console.log(`Last problem: ${name}`);
    }
}

examPreparation(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])