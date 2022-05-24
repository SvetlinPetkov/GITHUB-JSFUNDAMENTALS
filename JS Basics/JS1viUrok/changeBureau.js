function changeBureau(input) {
    let bitcoinNm = Number(input[0]);
    let juanNm = Number(input[1]);
    let comission = Number(input[2]);
    let totalSumLv = ((bitcoinNm * 1168) + (juanNm * 1.76 * 0.15)) / 1.95;
    let result = totalSumLv - (totalSumLv * comission / 100)
    console.log(result.toFixed(2))

}

changeBureau([1, 5, 5])