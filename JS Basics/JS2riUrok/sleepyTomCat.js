function sleepyTomCat(input) {
    let restDays = Number(input[0]);
    let playInRest = restDays * 127;
    let playInWork = (365 - restDays) * 63;
    let allPlayTime = playInRest + playInWork;
    let restTime = Math.abs(30000 - allPlayTime);
    let restTimeH = Math.floor(restTime / 60);
    let restTimeM = restTime - restTimeH * 60;

    if (allPlayTime > 30000) {
        console.log(`Tom will run away`)
        console.log(`${restTimeH} hours and ${restTimeM} minutes more for play`)
    } else {
        console.log(`Tom sleeps well`)
        console.log(`${Math.abs(restTimeH)} hours and ${restTimeM} minutes less for play`)
    }

}

sleepyTomCat([113])