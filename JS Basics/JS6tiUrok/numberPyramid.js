function numberPyramid(input) {
    let n = Number(input[0]);
    let current = 1;
    let isBigegr = false;
    let printCurrentLine = "";
    for (let row = 1; row <= n; row++) {
        for(let col = 1; col <= n; col++){
            if(current > n){
                isBigegr = true;
                break;
            }
            printCurrentLine += current + " ";
            current++
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if(isBigegr){
            break;
        }
    }
}


numberPyramid(["7"])