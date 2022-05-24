function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let days = Number(input[3]);
    let cost = 0;
    switch (destination) {
        case "Dubai":
            if (season === "Winter") {
                cost = days * 45000;
            } else if (season === "Summer") {
                cost = days * 40000;
            }break;
        case "Sofia":
            if (season === "Winter") {
                cost = days * 17000;
            } else if (season === "Summer") {
                cost = days * 12500;
            }break;
        case "London":
            if (season === "Winter") {
                cost = days * 24000;
            } else if (season === "Summer") {
                cost = days * 20250;
            }break;
    }
    if (destination === "Dubai") {
        cost *= 0.70;
    } else if (destination === "Sofia") {
        cost *= 1.25;
    }
    if (budget >= cost) {
        console.log(`The budget for the movie is enough! We have ${(budget - cost).toFixed(2)} leva left!`)
    } else {
        console.log(`The director needs ${(cost - budget).toFixed(2)} leva more!`)
    }
}

movieDestination(["400000", "Sofia", "Winter", "20"])