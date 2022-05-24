function logistics(input) {
    let cargoNum = Number(input[0]);
    let bus = 0;
    let truck = 0;
    let train = 0;
    let tonesBus = 0;
    let tonesTruck = 0;
    let toneTrain = 0;
    let tonesSum = 0;
    let avrageTones = 0;

    for (let i = 1; i <= cargoNum; i++) {
        let tones = Number(input[i]);
        if (tones <= 3) {
            bus += 200 * tones;
            tonesBus += tones;
        } else if (tones <= 11) {
            truck += 175 * tones;
            tonesTruck += tones;
        } else {
            train += 120 * tones;
            toneTrain += tones;
        }
    }
    tonesSum = tonesBus + tonesTruck + toneTrain;
    avrageTones = ((bus + truck + train) / tonesSum).toFixed(2);

    console.log(avrageTones)
    console.log((tonesBus / tonesSum * 100).toFixed(2) + "%")
    console.log((tonesTruck / tonesSum * 100).toFixed(2) + "%")
    console.log((toneTrain / tonesSum * 100).toFixed(2) + "%")
}

logistics(["4", "1", "5", "16", "3"])