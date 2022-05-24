function hospital(input) {
    let period = Number(input[0]);
    let doctorsNum = 7;
    let pacient = 0;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let i = 1; i <= period; i++) {
        pacient = Number(input[i]);

        if (i % 3 === 0 && untreatedPatients > treatedPatients) {
            doctorsNum++
        }
        if (pacient <= doctorsNum) {
            treatedPatients += pacient;
        } else {
            treatedPatients += doctorsNum;
            untreatedPatients += pacient - doctorsNum;
        }
    }
    console.log(`Treated patients: ${treatedPatients}.`)
    console.log(`Untreated patients: ${untreatedPatients}.`)
}

hospital(["4", "7", "27", "9", "1"])