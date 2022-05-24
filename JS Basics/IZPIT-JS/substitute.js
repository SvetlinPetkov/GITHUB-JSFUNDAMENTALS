function substitute(input) {
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);
    let num = 0;

    for (let o = k; o < 9; o++) {
        for (let p = 9; p >= l; p--) {
            for (let r = m; r < 9; r++) {
                for (let s = 9; s >= n; s--) {
                    if (o % 2 === 0 && p % 2 !== 0 && r % 2 === 0 && s % 2 !== 0) {
                        if(num >= 6){
                            break;
                        }
                        if(o === r && p === s){
                            console.log(`Cannot change the same player.`);
                        }else{
                            num++
                            console.log(`${o}${p} - ${r}${s}`);
                        }
                    }
                }
            }
        }
    }
}

substitute(["6",
"7",
"5",
"6"])