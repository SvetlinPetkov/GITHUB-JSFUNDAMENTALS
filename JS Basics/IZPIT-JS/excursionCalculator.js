function excursionCalculator(input){
    let peopleNum = Number(input[0]);
    let season = input[1];
    let price = 0;
    switch (season) {
        case "spring":
            if(peopleNum > 5){
                price = peopleNum * 48;
            }else{
                price = peopleNum * 50;
            }
            break;
        case "summer":
            if(peopleNum > 5){
                price = (peopleNum * 45) * 0.85;
            }else{
                price = (peopleNum * 48.50) * 0.85;
            }
            break;
        case "autumn":
            if(peopleNum > 5){
                price = peopleNum * 49.50;
            }else{
                price = peopleNum * 60;
            }
            break;
        case "winter":
            if(peopleNum > 5){
                price = (peopleNum * 85) * 1.08;
            }else{
                price = (peopleNum * 86) * 1.08;
            }
            break;
    }
    console.log(`${price.toFixed(2)} leva.`)
}


excursionCalculator(["20",
"winter"])