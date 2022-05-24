function skiTrip(input) {
    let days = Number(input[0]);
    let type = input[1];
    let feedback = input[2];
    let nights = days - 1;
    let totalSum = 0;
    switch (type) {
        case `room for one person`:
            totalSum = nights * 18;
            if (feedback === `positive`) {
                totalSum = totalSum * 1.25;
            } else if (feedback === `negative`) {
                totalSum = totalSum * 0.9;
            }
            break;
        case `apartment`:
            totalSum = nights * 25;
            if (days > 15) {
                totalSum = totalSum * 0.5;
            } else if (days <= 15 && days >= 10) {
                totalSum = totalSum * 0.65;
            } else {
                totalSum = totalSum * 0.70;
            }
            if (feedback === `positive`) {
                totalSum = totalSum * 1.25;
            } else if (feedback === `negative`) {
                totalSum = totalSum * 0.9;
            }
            break;
        case `president apartment`:
            totalSum = nights * 35;
            if (days > 15) {
                totalSum = totalSum * 0.8;
            } else if (days <= 15 && days >= 10) {
                totalSum = totalSum * 0.85;
            } else {
                totalSum = totalSum * 0.9;
            }
            if (feedback === `positive`) {
                totalSum = totalSum * 1.25;
            } else if (feedback === `negative`) {
                totalSum = totalSum * 0.9;
            }
            break;
    }
    console.log(totalSum.toFixed(2));
}

skiTrip(["2",
"apartment",
"positive"])