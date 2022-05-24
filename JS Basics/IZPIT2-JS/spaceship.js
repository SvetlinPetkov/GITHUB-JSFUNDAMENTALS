function solve(input) {
    let widThofShip = Number(input[0]);
    let lengthTheShip = Number(input[1]);
    let hightShip = Number(input[2]);
    let MiddleHight = Number(input[3]);
    let volume = widThofShip * lengthTheShip * hightShip;
    let needAstronaft = (MiddleHight + 0.40) * 2 * 2;
    let numAstronaft = Math.floor(volume / needAstronaft);

    if (numAstronaft > 10) {
        console.log(`The spacecraft is too big.`);

    } else if (numAstronaft < 3) {
        console.log(`The spacecraft is too small.`);
    }
    
    else if (numAstronaft >= 3 || numAstronaft <= 10) {
        console.log(`The spacecraft holds ${numAstronaft} astronauts.`);
    }
}

solve(["3.5",
"4",
"5",
"1.70"])