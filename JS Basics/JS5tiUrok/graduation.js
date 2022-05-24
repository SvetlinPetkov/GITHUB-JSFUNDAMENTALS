function graduation(input) {
    let index = 0;
    let name = input[index];
    index++;
    let i = 1;
    let badGrade = 0;
    let isExcluded = false;
    let sumGrade = 0;
    while(i <= 12){
        let grade = Number(input[index]);
        index++;
        if(grade < 4){
            badGrade++
            if(badGrade > 1){
                isExcluded = true;
                console.log(`${name} has been excluded at ${i} grade`)
                break;
            }
            continue;
        }
        sumGrade += grade;
        i++
    }
    if(!isExcluded){
        let avrGrade = sumGrade / 12;
        console.log(`${name} graduated. Average grade: ${avrGrade.toFixed(2)}`)
    }
}

graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])