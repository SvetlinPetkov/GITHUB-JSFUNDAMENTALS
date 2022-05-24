function housePaint(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    let side = 2 * (x * y) - (2 * (1.5 *1.5));
    let front = 2 * (x * x) - (1.2 *2);
    let greenPaint = (side + front) / 3.4;
    let roof = 2 * ((x * h)/2) + 2 * (x * y);
    let redPaint = roof / 4.3;

    console.log(greenPaint.toFixed(2))
    console.log(redPaint.toFixed(2))

}

housePaint(["6", "10", "5.2"])