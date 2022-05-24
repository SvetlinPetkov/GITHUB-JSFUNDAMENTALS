function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let quantity = Number(input[2]);
    let beverage = 0
    switch (city) {
        case 'Sofia':
            if (product === 'coffee') {
                beverage = 0.50;
                break;
            } else if (product === 'water') {
                beverage = 0.80;
                break;
            } else if (product === 'beer') {
                beverage = 1.20;
                break;
            } else if (product === 'sweets') {
                beverage = 1.45;
                break;
            } else if (product === 'peanuts') {
                beverage = 1.60;
                break;
            }
        case 'Plovdiv':
            if (product === 'coffee') {
                beverage = 0.40;
                break;
            } else if (product === 'water') {
                beverage = 0.70;
                break;
            } else if (product === 'beer') {
                beverage = 1.15;
                break;
            } else if (product === 'sweets') {
                beverage = 1.30;
                break;
            } else if (product === 'peanuts') {
                beverage = 1.50;
                break;
            }
        case 'Varna':
            if (product === 'coffee') {
                beverage = 0.45;
                break;
            } else if (product === 'water') {
                beverage = 0.70;
                break;
            } else if (product === 'beer') {
                beverage = 1.10;
                break;
            } else if (product === 'sweets') {
                beverage = 1.35;
                break;
            } else if (product === 'peanuts') {
                beverage = 1.55;
                break;
            }
    }
    console.log(beverage * quantity)

}

smallShop(["coffee", "Varna", "2"])