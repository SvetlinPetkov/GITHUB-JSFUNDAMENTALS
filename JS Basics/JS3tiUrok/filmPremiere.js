function filmPremiere(input) {
    let movie = input[0];
    let food = input[1];
    let ticketsNum = Number(input[2]);
    let bill = 0;
    switch (movie) {
        case `John Wick`:
            if (food === `Drink`) {
                bill = ticketsNum * 12;
            } else if (food === `Popcorn`) {
                bill = ticketsNum * 15;
            } else if (food === `Menu`) {
                bill = ticketsNum * 19;
            }
            break;
        case `Star Wars`:
            if (food === `Drink`) {
                bill = ticketsNum * 18;
            } else if (food === `Popcorn`) {
                bill = ticketsNum * 25;
            } else if (food === `Menu`) {
                bill = ticketsNum * 30;
            }
            if (ticketsNum >= 4) {
                bill = bill * 0.7
            }
            break;
        case `Jumanji`:
            if (food === `Drink`) {
                bill = ticketsNum * 9;
            } else if (food === `Popcorn`) {
                bill = ticketsNum * 11;
            } else if (food === `Menu`) {
                bill = ticketsNum * 14;
            }
            if (ticketsNum === 2) {
                bill = bill * 0.85
            }
            break;
    }
    console.log(`Your bill is ${bill.toFixed(2)} leva.`)
}

filmPremiere(["Star Wars", "Popcorn", 4])