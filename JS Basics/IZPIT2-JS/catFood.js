function catFood(input) {
    let index = 0;
    let catCount = Number(input[index]);
    index++;
    let group1Counter = 0;
    let group2Counter = 0;
    let group3Counter = 0;
    let sumFood = 0;

    for (i = 0; i < catCount; i++) {
        let currentFood = Number(input[index]);
        index++;
        sumFood += currentFood;
        if (currentFood >= 100 && currentFood < 200) {
            group1Counter++;
        } else if (currentFood >= 200 && currentFood < 300) {
            group2Counter++;
        } else if (currentFood >= 300 && currentFood < 400) {
            group3Counter++;
        }
    }
    let totalFood = sumFood / 1000;
    let foodPerDay = totalFood * 12.45;
    console.log(`Group 1: ${group1Counter} cats.`);
    console.log(`Group 2: ${group2Counter} cats.`);
    console.log(`Group 3: ${group3Counter} cats.`);
    console.log(`Price for food per day: ${foodPerDay.toFixed(2)} lv.`);
}
catFood(["6",
    "102",
    "236",
    "123",
    "399",
    "342",
    "222"]);