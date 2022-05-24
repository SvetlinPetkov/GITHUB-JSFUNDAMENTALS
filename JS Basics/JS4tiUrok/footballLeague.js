function footballLeague(input) {
    let stadiumCap = Number(input[0]);
    let fenNum = Number(input[1]);
    let sector = "";
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    for (let i = 2; i < input.length; i++) {
        let sector = input[i];
        switch (sector) {
            case "A": p1++; break;
            case "B": p2++; break;
            case "V": p3++; break;
            case "G": p4++; break;
        }
    }
    let aPercent = p1 / fenNum * 100;
    let bPercent = p2 / fenNum * 100;
    let vPercent = p3 / fenNum * 100;
    let gPercent = p4 / fenNum * 100;
    let totalPercent = fenNum / stadiumCap * 100;
    console.log(aPercent.toFixed(2) + "%");
    console.log(bPercent.toFixed(2) + "%");
    console.log(vPercent.toFixed(2) + "%");
    console.log(gPercent.toFixed(2) + "%");
    console.log(totalPercent.toFixed(2) + "%");
}

footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"])