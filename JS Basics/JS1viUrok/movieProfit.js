function movieProfit(input) {
    let movieName = (input[0]);
    let daysNm = (input[1]);
    let ticketsNm = (input[2]);
    let ticketPrice = (input[3]);
    let netPercent = (input[4]);
    let ticketPricePerDay = ticketsNm * ticketPrice;
    let totalProfit = daysNm * ticketPricePerDay;
    let totalIncome = totalProfit - (totalProfit * netPercent / 100);
    console.log(`The profit from the movie ${movieName} is ${totalIncome.toFixed(2)} lv.`)
}

movieProfit(["The Programmer", 20, 500, 7.5, 7])