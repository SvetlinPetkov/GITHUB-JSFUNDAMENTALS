function fruitMarket(arg1, arg2, arg3, arg4, arg5){
    let yagodiPrice = Number(arg1);
    let bananaKg = Number(arg2);
    let portocalKg = Number(arg3);
    let maliniKg = Number(arg4);
    let yagodiKg = Number(arg5);
    let maliniPrice = yagodiPrice / 2;
    let malini = maliniPrice * maliniKg;
    let portocal = (maliniPrice - (maliniPrice * 0.4)) * portocalKg;
    let banana = (maliniPrice - (maliniPrice * 0.8)) * bananaKg;
    let yagodi = yagodiPrice * yagodiKg;
    let totalSum = malini + portocal + banana + yagodi;

    console.log (totalSum.toFixed(2))
}

fruitMarket(48, 10, 3.3, 6.5, 1.7)