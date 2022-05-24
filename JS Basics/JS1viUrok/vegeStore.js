function vegeStore(input){
    let vegePerKilo = Number(input[0]);
    let fruitPerKilo = Number(input[1]);
    let vege = Number(input[2]);
    let fruit = Number(input[3]);
    let vegeSum = vegePerKilo * vege;
    let fruitSum = fruitPerKilo * fruit;
    let summ = (vegeSum + fruitSum) / 1.94;
    console.log(summ.toFixed(2))

}

vegeStore(["0.194", "19.4", "10", "10"])