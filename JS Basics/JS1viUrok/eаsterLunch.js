function easterLunch(input){
    let kozunakNm = Number(input[0]);
    let eggsNm = Number(input[1]);
    let cookiesKg = Number(input[2]);
    let totalSum = (kozunakNm * 3.20) + (eggsNm * 4.35) + (cookiesKg * 5.40) + (eggsNm * 12 * 0.15);
    
    console.log(totalSum.toFixed(2))

}

easterLunch(["3", "2", "3"])