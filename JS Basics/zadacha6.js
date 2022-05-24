function zadacha6(input) {
    let n = Number(input[0]);
    let condition1 = false;
    let condition2 = false;
    let a1 = 0;
    let b1 = 0;
    let c1 = 0;
    let d1 = 0;
    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let sum = a + b + c + d;
                    let mult = a * b * c * d;
                    if (sum === mult && n % 10 === 5) {
                        a1 = a;
                        b1 = b;
                        c1 = c;
                        d1 = d;
                        condition1 = true;
                        break;
                    }
                    if (Math.floor(mult / sum) === 3 && n % 3 === 0) {
                        condition2 = true;
                        a1 = a;
                        b1 = b;
                        c1 = c;
                        d1 = d;
                        break;
                    }
                }
                if(condition1){
                    break;
                }
                if(condition2){
                    break;
                } 
            }
        }
    }
    if (condition1) {
        console.log(`${a1}${b1}${c1}${d1}`);
    }
    if (condition2) {
        console.log(`${d1}${c1}${b1}${a1}`);
    }
    if(!condition1 && !condition2){
        console.log("Nothing found");
    }
}

zadacha6(["214"])