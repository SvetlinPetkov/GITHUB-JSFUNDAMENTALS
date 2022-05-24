function pastryShop(input) {
    let type = input[0];
    let pastryCount = Number(input[1]);
    let day = Number(input[2]);
    let sum = 0;
    if (day < 16) {
        switch (type) {
            case "Cake":
                sum = 24 * pastryCount;
                break;
            case "Souffle":
                sum = 6.66 * pastryCount;
                break;
            case "Baklava":
                sum = 12.60 * pastryCount;
                break;
        }
        sum *= 0.90;
    }
    if (day > 15) {
        switch (type) {
            case "Cake":
                sum = 28.7 * pastryCount;
                break;
            case "Souffle":
                sum = 9.80 * pastryCount;
                break;
            case "Baklava":
                sum = 16.98 * pastryCount;
                break;
        }
    }
    if (day < 23) {
        if (sum >= 100 && sum <= 200) {
            sum *= 0.85;
        } else if (sum > 200) {
            sum *= 0.75;
        }
    }
    console.log(sum.toFixed(2));
}

pastryShop(["Souffle",
    "20",
    "24"])