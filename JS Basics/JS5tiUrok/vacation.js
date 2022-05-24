function vacation(input) {
    let index = 0;
    let neededbudget = Number(input[index]);
    index++
    let startMoney = Number(input[index]);
    index++
    let command = input[index];
    index++
    let totalDays = 0;
    let spendDays = 0;
    let toMuchSpend = false;
    while (startMoney < neededbudget) {
        totalDays++
        let operation = command;
        let newSum = Number(input[index]);
        index++
        switch (operation) {
            case "spend":
                spendDays++
                startMoney -= newSum;
                if (spendDays === 5) {
                    toMuchSpend = true;
                }
                if (startMoney < 0) {
                    startMoney = 0;
                }
                break;
            case "save":
                spendDays = 0;
                startMoney += newSum;
                break;
        }
        if(toMuchSpend === true){
            console.log(`You can't save the money.`);
            console.log(totalDays);
            break;
        }
        command = input[index];
        index++
    }
    if (startMoney >= neededbudget) {
        console.log(`You saved the money for ${totalDays} days.`)
    }
}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])