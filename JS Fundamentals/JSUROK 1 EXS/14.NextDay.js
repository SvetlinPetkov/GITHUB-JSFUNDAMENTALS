function nexttDay(year, month, day) {
    let nextDay = day + 1;
    let nextMonth = month;
    let nextYear = year;
    if (nextYear < 1901) {
        nextYear = 1901;
    }
    if (nextDay > 30) {
        nextDay = 1;
        nextMonth++
        if (nextMonth > 12) {
            nextMonth = 1;
            nextYear++
        }
    }
    console.log(`${nextYear}-${nextMonth}-${nextDay}`);
}

nexttDay(1, 1, 1)