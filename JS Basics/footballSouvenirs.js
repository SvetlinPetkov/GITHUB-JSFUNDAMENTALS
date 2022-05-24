function footballSouvenirs(input) {
    let team = input[0];
    let souvenir = input[1];
    let souvenirCount = input[2];
    let sum = 0;
    let total = 0;
    let wrongTeam = false;
    let wrongStock = false;
    switch (team) {
        case "Argentina":
            switch (souvenir) {
                case "flags":
                    sum += 3.25;
                    break;
                case "caps":
                    sum += 7.20;
                    break;
                case "posters":
                    sum += 5.10;
                case "stickers":
                    sum += 1.25;
                    break;
                default:
                    wrongStock = true;
                    break;
            }
            break;
        case "Brazil":
            switch (souvenir) {
                case "flags":
                    sum += 4.20;
                    break;
                case "caps":
                    sum += 8.50;
                    break;
                case "posters":
                    sum += 5.35;
                case "stickers":
                    sum += 1.20;
                    break;
                default:
                    wrongStock = true;
                    break;
            }
            break;
        case "Croatia":
            switch (souvenir) {
                case "flags":
                    sum += 2.75;
                    break;
                case "caps":
                    sum += 6.90;
                    break;
                case "posters":
                    sum += 4.95;
                case "stickers":
                    sum += 1.10;
                    break;
                default:
                    wrongStock = true;
                    break;
            }
            break;
        case "Denmark":
            switch (souvenir) {
                case "flags":
                    sum += 3.10;
                    break;
                case "caps":
                    sum += 6.50;
                    break;
                case "posters":
                    sum += 4.80;
                case "stickers":
                    sum += 0.90;
                    break;
                default:
                    wrongStock = true;
                    break;
            }
            break;
        default:
            wrongTeam = true;
            break;
    }
    if (wrongTeam) {
        console.log(`Invalid country!`);
    }
    if (wrongStock) {
        console.log(`Invalid stock!`);
    }
    if (!wrongTeam && !wrongStock) {
        total = sum * souvenirCount;
        console.log(`Pepi bought ${souvenirCount} ${souvenir} of ${team} for ${total.toFixed(2)} lv.`);
    }
}

footballSouvenirs(["Croatia",
"flags",
"13"])