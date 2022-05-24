function walking(input) {
    let index = 0;
    let command = input[index];
    let target = 10000;
    let sum = 0;
    while (command !== "Going home") {
        let steps = Number(command);
        sum += steps;
        if (sum >= target) {
            console.log(`Goal reached! Good job!`);
            console.log(`${sum - target} steps over the goal!`);
            break;
        }
        index++;
        command = input[index];
    }
    if (command === "Going home") {
        index++;
        let stepsToHome = Number(input[index]);
        sum += stepsToHome;
        if (sum >= target) {
            console.log(`Goal reached! Good job!`);
            console.log(`${sum - target} steps over the goal!`);
        } else {
            console.log(`${target - sum} more steps to reach goal.`);
        }
    }
}

walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])