function agencyProfit(input){
    let name = (input[0]);
    let ticketNmAdult = Number(input[1]);
    let ticketNmKids = Number(input[2]);
    let netPrice = Number(input[3]);
    let taxPrice = Number(input[4]);
    let totalPrice = (ticketNmKids * ((netPrice * 0.3) + taxPrice)) + (ticketNmAdult * (netPrice + taxPrice));
    let profit = totalPrice * 0.2;

    console.log(`The profit of your agency from ${name} tickets is ${profit.toFixed(2)} lv.`)

}

agencyProfit(["RyanAir", "60", "23", "158.96", "39.12"])