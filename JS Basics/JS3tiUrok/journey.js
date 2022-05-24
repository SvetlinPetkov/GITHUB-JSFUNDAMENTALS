function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let type
    let destination
    if (budget <= 100) {
        if (season === 'summer') {
            budget *= 0.3;
            type = 'Camp';
            destination = 'Bulgaria';
        } else if (season === `winter`) {
            budget *= 0.7;
            type = 'Hotel';
            destination = 'Bulgaria';
        }
    } else if (budget > 100 && budget <= 1000) {
        if (season === 'summer') {
            budget *= 0.4;
            type = 'Camp';
            destination = 'Balkans'
        } else if (season === `winter`) {
            budget *= 0.8;
            type = 'Hotel';
            destination = 'Balkans';
        }
    } else {
        if (season === 'summer') {
            budget *= 0.9;
            type = 'Hotel';
            destination = 'Europe';
        } else if (season === `winter`) {
            budget *= 0.9;
            type = 'Hotel';
            destination = 'Europe';
        }
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${type} - ${budget.toFixed(2)}`);
}

journey(["678.53", "winter"])