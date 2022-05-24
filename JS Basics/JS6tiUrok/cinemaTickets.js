function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    let studentCounter = 0;
    let standartCounter = 0;
    let kidCounter = 0;
    let totalCounter = 0;
    while (command !== "Finish") {
        let name = command;
        index++;
        let freeSpot = Number(input[index]);
        index++;
        let type = input[index];
        let ticketCounter = 0;
        while (type !== "End") {
            ticketCounter++;
            switch (type) {
                case "student":
                    studentCounter++;
                    break;
                case "standard":
                    standartCounter++;
                    break;
                case "kid":
                    kidCounter++;
                    break;
            }
            if(ticketCounter >= freeSpot){
                break;
            }
            index++;
            type = input[index];
        }
        totalCounter += ticketCounter;
        let singleMoviePercent = ticketCounter / freeSpot * 100;
        console.log(`${name} - ${singleMoviePercent.toFixed(2)}% full.`); 
        index++;
        command = input[index];
    }
    console.log(`Total tickets: ${totalCounter}`);
    console.log(`${(studentCounter / totalCounter * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standartCounter / totalCounter * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter / totalCounter * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])