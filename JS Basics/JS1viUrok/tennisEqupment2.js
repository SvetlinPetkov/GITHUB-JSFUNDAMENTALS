function tennisEquipment(input){
    let pricePerRocket = (input[0]);
    let rocketNum = (input[1]);
    let shoesNum = (input[2]);
    let rocketPrice = pricePerRocket * rocketNum;
    let shoesPrice = shoesNum * (pricePerRocket / 6);
    let totalPrice = ((rocketPrice + shoesPrice) * 0.2) + rocketPrice + shoesPrice;
    let djokovic = totalPrice / 8;
    let rest = totalPrice * 7 / 8;


    console.log(`Price to be paid by Djokovic ${Math.floor(djokovic)}`)
    console.log(`Price to be paid by sponsors ${Math.ceil(rest)}`)

}

tennisEquipment([850, 4, 2])