function vacation(peopleCount, groupType, dayOfWeek) {
    let studentsFrydayPrice = 8.45;
    let businessFrydayPrice = 10.90;
    let regularFrydayPrice = 15;
    let studentsSaturdayPrice = 9.80;
    let businessSaturdayPrice = 15.60;
    let regularSaturdayPrice = 20;
    let studentsSundayPrice = 10.46;
    let businessSundayPrice = 16;
    let regularSundayPrice = 22.50;

    let studentDiscountPerc = 15;
    let businessDiscountCount = 10;
    let regularDiscountPerc = 5;

    let totalPrice = 0;

    if (groupType === `Business` && peopleCount >= 100) {
        peopleCount -= businessDiscountCount;
    }
    if (groupType === 'Students' && dayOfWeek === 'Friday') {
        totalPrice += peopleCount * studentsFrydayPrice;
    } else if (groupType === 'Students' && dayOfWeek === 'Saturday') {
        totalPrice += peopleCount * studentsSaturdayPrice;
    } else if (groupType === 'Students' && dayOfWeek === 'Sunday') {
        totalPrice += peopleCount * studentsSundayPrice;
    }
    if (groupType === 'Business' && dayOfWeek === 'Friday') {
        totalPrice += peopleCount * businessFrydayPrice;
    } else if (groupType === 'Business' && dayOfWeek === 'Saturday') {
        totalPrice += peopleCount * businessSaturdayPrice;
    } else if (groupType === 'Business' && dayOfWeek === 'Sunday') {
        totalPrice += peopleCount * businessSundayPrice;
    }
    if (groupType === 'Regular' && dayOfWeek === 'Friday') {
        totalPrice += peopleCount * regularFrydayPrice;
    } else if (groupType === 'Regular' && dayOfWeek === 'Saturday') {
        totalPrice += peopleCount * regularSaturdayPrice;
    } else if (groupType === 'Regular' && dayOfWeek === 'Sunday') {
        totalPrice += peopleCount * regularSundayPrice;
    }
    if (groupType === `Students` && peopleCount >= 30) {
        totalPrice -= totalPrice * (studentDiscountPerc / 100);
    }
    if (groupType === `Regular` && peopleCount >= 10 && peopleCount <= 20) {
        totalPrice -= totalPrice * (regularDiscountPerc / 100);
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")