function traveling(input) {
    let index = 0;
    let command = input[index];
    index++
    while (command !== "End") {
        let destination = command;
        let budget = Number(input[index]);
        index++;
        let tempSum = 0;
        while (tempSum < budget) {
            let addMoney = Number(input[index]);
            index++
            tempSum += addMoney;
        }
        console.log(`Going to ${destination}!`);
        command = input[index];
        index++;
    }
}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
