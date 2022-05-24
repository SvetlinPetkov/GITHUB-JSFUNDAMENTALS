function catWalking(input) {
    let walkPerDayMin = Number(input[0]);
    let walkPerDayNm = Number(input[1]);
    let caloriesPerDay = Number(input[2]);
    let totalCalories = walkPerDayNm * walkPerDayMin * 5;
    let neededCalories = caloriesPerDay * 0.5;
    if (totalCalories >= neededCalories) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`)
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`)
    }

}

catWalking([30, 3, 600])