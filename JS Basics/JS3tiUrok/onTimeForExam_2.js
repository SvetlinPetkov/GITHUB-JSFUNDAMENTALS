function onTimeForExam(input) {
    let hourExam = Number(input[0]);
    let minutesExam = Number(input[1]);
    let hourArrive = Number(input[2]);
    let minutesArrive = Number(input[3]);
    let examToMinutes = hourExam * 60 + minutesExam;
    let arriveToMinutes = hourArrive * 60 + minutesArrive;
    if (hourArrive > hourExam) {
        console.log(`Late`);
    } else if (hourExam === hourArrive && minutesExam < minutesArrive) {
        console.log(`Late`);
    } else if ((examToMinutes - arriveToMinutes) <= 30) {
        console.log(`On time`);
    } else {
        console.log(`Early`);
    }
    if (arriveToMinutes < examToMinutes) {
        let minBefore = examToMinutes - arriveToMinutes;
        let hour = Math.floor(minBefore / 60);
        let min = minBefore % 60;
        if (minBefore < 60) {
            console.log(`${min} minutes before the start`);
        } else if (minBefore >= 60 && min < 10) {
            console.log(`${hour}:0${min} hours before the start`)
        } else {
            console.log(`${hour}:${min} hours before the start`)
        }
    }
    if (arriveToMinutes > examToMinutes) {
        let minAfter = arriveToMinutes - examToMinutes;
        let hour = Math.floor(minAfter / 60);
        let min = minAfter % 60;
        if (minAfter < 60) {
            console.log(`${min} minutes after the start`);
        } else if (minAfter >= 60 && min < 10) {
            console.log(`${hour}:0${min} hours after the start`)
        } else {
            console.log(`${hour}:${min} hours after the start`)
        }
    }
}

onTimeForExam(["11",
    "30",
    "8",
    "12"])