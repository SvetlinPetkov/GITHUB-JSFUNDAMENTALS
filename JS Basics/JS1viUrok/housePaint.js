function housePaint(input){
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);
    let sideW = x * y;
    let window = 1.5 * 1.5;
    let faceSideW = 2 * sideW - 2 * window;
    let rearW = (x * x);
    let door = 1.2 * 2;
    let faceRearW = 2 * rearW - door;
    let faceSum = faceSideW + faceRearW;
    let greenPaint = (faceSum / 3.4).toFixed(2);
    let faceSideRoof = 2 * (x * y);
    let faceFrontRoof = 2 * ((x * h) / 2).toFixed(2);
    let faceSumRoof = faceSideRoof + faceFrontRoof;
    let redPaint = (faceSumRoof / 4.3).toFixed(2)


    console.log(greenPaint)
    console.log(redPaint)

}

housePaint(["6", "10", "5.2"])