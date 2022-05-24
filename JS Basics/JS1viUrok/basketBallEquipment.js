function basketBallEq(input) {
    let yearTax = Number(input[0]);
    let shoes = yearTax * 0.6;
    let outfit = shoes * 0.8;
    let ball = outfit / 4;
    let accsesories = ball / 5;
    let totalSum = yearTax + shoes + outfit + ball + accsesories;
    console.log(totalSum.toFixed(2))
}

basketBallEq([320])