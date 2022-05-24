function zadacha2(input){
    let days = Number(input[0]);
    let totalFood = Number(input[1]);
    let foodPerDay1 = Number(input[2]);
    let foodPerDay2 = Number(input[3]);
    let foodPerDay3 = Number(input[4])
    let sumFood1 = foodPerDay1 * days;
    let sumFood2 = foodPerDay2 * days;
    let sumFood3 = foodPerDay3 * days;
    let total = sumFood1 + sumFood2 + sumFood3;
    if(totalFood >= total){
        console.log(`${Math.floor(totalFood - total)} kilos of food left.`)
    }else{
        console.log(`${Math.ceil(total - totalFood)} more kilos of food are needed.`);
    }
}
zadacha2(["5",
"10",
"2.1",
"0.8",
"11"])