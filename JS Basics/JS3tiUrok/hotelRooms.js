function hotelRooms(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let priceStudio = 0;
    let priceApartment = 0;
    if (month === 'May' || month === 'October') {
        priceStudio = 50;
        priceApartment = 65;
        if (nights > 14) {
            priceStudio *= 0.70;
        } else if (nights > 7) {
            priceStudio *= 0.95;
        }
    } else if (month === 'June' || month === 'September') {
        priceStudio = 75.20;
        priceApartment = 68.70;
        if (nights > 14) {
            priceStudio *= 0.8;
        }
    } else if (month === 'July' || month === 'August') {
        priceStudio = 76;
        priceApartment = 77;
    }
    if (nights > 14) {
        priceApartment *= 0.9
    }
    console.log(`Apartment: ${(priceApartment * nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceStudio * nights).toFixed(2)} lv.`)
}

hotelRooms(["August",
    "20"])