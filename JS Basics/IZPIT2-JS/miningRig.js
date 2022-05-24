function miningRig(input) {

    let videocard = Number(input[0]);
    let adapter = Number(input[1]);
    let currentForDay = Number(input[2]);
    let totalForDay = Number(input[3]);

    let totalPriceVcard = videocard * 13;
    let totalPriceAdapter = adapter * 13;
    let totalMany = totalPriceVcard + totalPriceAdapter + 1000;
    let profitForDay = totalForDay - currentForDay;
    let totalcard = (13 * profitForDay);
    let finish = Math.ceil(totalMany / totalcard);
    console.log(totalMany);
    console.log(finish);
}

miningRig(["700",
"15",
"0.20",
"2"])