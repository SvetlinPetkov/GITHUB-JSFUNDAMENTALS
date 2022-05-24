function circleAreaPerimeter(input){
    let r = (input[0]);
    let calculatedArea = Math.PI * Math.pow(r , 2);
    let calculatedPerimeter = 2 * Math.PI * r;
    console.log(calculatedArea.toFixed(2))
    console.log(calculatedPerimeter.toFixed(2))
}

circleAreaPerimeter([4.5])