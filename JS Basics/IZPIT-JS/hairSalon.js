function hairSalon(input) {
    let index = 0;
    let target = Number(input[index]);
    index++;
    let command = input[index];
    index++
    let sum = 0;
    let deff = false;
    while (command !== "closed") {
        let operation = command;
        switch (operation) {
            case "haircut":
                let gender = input[index];
                index++
                if (gender === "mens") {
                    sum += 15;
                }
                if (gender === "ladies") {
                    sum += 20;
                }
                if (gender === "kids") {
                    sum += 10;
                }
            case "color":
                let coloperation = input[index];
                if (coloperation === "touch up") {
                    sum += 20;
                }
                if (coloperation === "full color") {
                    sum += 30;
                }
                break;
        }
        if(sum >= target){
            deff = true;
            break;
        }
        command = input[index];
        index++;
    }
    if(target < sum || deff){
        console.log(`You have reached your target for the day!`);
    }else{
        console.log(`Target not reached! You need ${target - sum}lv. more.`);
    }
    console.log(`Earned money: ${sum}lv.`);
}

hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"])