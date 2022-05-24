function celToFar(input){
    let celsius = Number(input[0]);
    let farenheit = Number(celsius * 1.8) + 32;
    console.log(farenheit.toFixed(2));

}

celToFar(["20"])