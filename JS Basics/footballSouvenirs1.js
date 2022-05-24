function football(input) {
    let team = input[0];
    let souvenirs = input[1];
    let count = Number(input[2]);
    let sum = 0
    let wrong = false;

    if (team === 'Argentina') {
        switch (souvenirs) {
            case 'flags': sum = count * 3.25; break;
            case 'caps': sum = count * 7.20; break;
            case 'posters': sum = count * 5.1; break;
            case 'stickers': sum = count * 1.25; break;
            default: console.log("Invalid stock!"); wrong = true; break;
        }
    }
    if (team === 'Brazil') {
        switch (souvenirs) {
            case 'flags': sum = count * 4.20; break;
            case 'caps': sum = count * 8.50; break;
            case 'posters': sum = count * 5.35; break;
            case 'stickers': sum = count * 1.20; break;
            default: console.log("Invalid stock!"); wrong = true; break;
        }
    }
    if (team === 'Croatia') {
        switch (souvenirs) {
            case 'flags': sum = count * 2.75; break;
            case 'caps': sum = count * 6.90; break;
            case 'posters': sum = count * 4.95; break;
            case 'stickers': sum = count * 1.10; break;
            default: console.log("Invalid stock!"); wrong = true; break;
        }
    }
    if (team === 'Denmark') {
        switch (souvenirs) {
            case 'flags': sum = count * 3.10; break;
            case 'caps': sum = count * 6.50; break;
            case 'posters': sum = count * 4.80; break;
            case 'stickers': sum = count * 0.90; break;
            default: console.log("Invalid stock!"); wrong = true; break;
        }
    }
    if (!wrong) {
        if (team !== 'Argentina' && team !== 'Brazil' && team !== 'Croatia' && team !== 'Denmark') {
            console.log("Invalid country!");
        } else {
            console.log(`Pepi bought ${count} ${souvenirs} of ${team} for ${sum.toFixed(2)} lv.`);
        }
    }
}

football(["fff",
"sss",
"35"])