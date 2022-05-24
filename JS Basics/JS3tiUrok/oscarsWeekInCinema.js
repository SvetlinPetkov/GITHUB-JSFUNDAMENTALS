function oscarsWeekInCinema(input) {
    let movieName = input[0];
    let type = input[1];
    let ticketNum = Number(input[2]);
    let price = 0;
    switch (movieName) {
        case "A Star Is Born":
            if (type === "normal") {
                price = ticketNum * 7.50;
            } else if (type === "luxury") {
                price = ticketNum * 10.50;
            } else if (type === "ultra luxury") {
                price = ticketNum * 13.50;
            }
            break;
        case "Bohemian Rhapsody":
            if (type === "normal") {
                price = ticketNum * 7.35;
            } else if (type === "luxury") {
                price = ticketNum * 9.45;
            } else if (type === "ultra luxury") {
                price = ticketNum * 12.75;
            }
            break;
        case "Green Book":
            if (type === "normal") {
                price = ticketNum * 8.15;
            } else if (type === "luxury") {
                price = ticketNum * 10.25;
            } else if (type === "ultra luxury") {
                price = ticketNum * 13.25;
            }
            break;
        case "The Favourite":
            if (type === "normal") {
                price = ticketNum * 8.75;
            } else if (type === "luxury") {
                price = ticketNum * 11.55;
            } else if (type === "ultra luxury") {
                price = ticketNum * 13.95;
            }
            break;
    }
    console.log(`${movieName} -> ${price.toFixed(2)} lv.`)
}

oscarsWeekInCinema(["The Favourite", "ultra luxury", "34"])