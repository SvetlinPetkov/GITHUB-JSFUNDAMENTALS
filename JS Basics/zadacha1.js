function zadacha1(input){
    let paper = Number(input[0]);
    let textile = Number(input[1]);
    let glue = Number(input[2]);
    let disscount = Number(input[3]);
    let disscountCalc = 1 - (disscount / 100);
    let paperPrice = paper * 5.80;
    let textilePrice = textile * 7.20;
    let gluePrice = glue * 1.20;
    let sum = paperPrice + textilePrice + gluePrice;
    let finalSum = sum * disscountCalc;
    console.log(finalSum.toFixed(3))

}

zadacha1(["4",
"2",
"5",
"13"])