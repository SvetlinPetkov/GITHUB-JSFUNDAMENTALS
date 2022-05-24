function onTimeForExam(input){
    let hourExam = Number(input[0]);
    let minutesExam = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinutes = Number(input[3]);
    let examToMinute = hourExam * 60 + minutesExam;
    let arriveToMinute = arriveHour * 60 + arriveMinutes;
    if (arriveHour > hourExam){
        console.log(`Late`);
    }else if(hourExam === arriveHour && minutesExam < arriveMinutes){
        console.log(`Late`);
    }else if (examToMinute - arriveToMinute <= 30){
        console.log(`On time`);
    }else{
        console.log(`Early`);
    }
    if(arriveToMinute < examToMinute){
        let minBefore = examToMinute - arriveToMinute;
        let hour = Math.floor(minBefore / 60);
        let min = minBefore % 60;
        if (minBefore < 60){
            console.log(`${minBefore} minutes before the start`);
        }else if (minBefore >= 60 && min < 10){
            console.log(`${hour}:0${min} hours before the start`);
        }else{
            console.log(`${hour}:${min} hours before the start`);
        }
    }
    if(arriveToMinute > examToMinute){
        let minAfter = arriveToMinute - examToMinute;
        let hour = Math.floor(minAfter / 60);
        let min = minAfter % 60;
        if(minAfter < 60){
            console.log(`${min} minutes after the start`);
        }else if(minAfter >= 60 && min < 10){
            console.log(`${hour}:0${min} hours after the start`)
        }else{
            console.log(`${hour}:${min} hours after the start`)
        }
    }
}

onTimeForExam(["11","30","8","12"])