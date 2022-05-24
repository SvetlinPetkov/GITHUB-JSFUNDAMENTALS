function trainTheTrainers(input){
    let index = 0;
    let n = Number(input[index]);
    index++;
    let command = input[index];
    let sumGrade = 0;
    let counter = 0;
    while(command !== "Finish"){
        let name = command;
        counter++;
        let currentSumGrade = 0;
        for(let i = 0; i < n; i++){
            index++
            let currentGrade = Number(input[index]);
            currentSumGrade += currentGrade;
        }
        let currentAvg = currentSumGrade / n;
        sumGrade += currentAvg;
        console.log(`${name} - ${currentAvg.toFixed(2)}.`);
        index++
        command = input[index];
    }
    let avgGrade = sumGrade / counter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])