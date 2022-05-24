function christamsGifts(input) {
    let index = 0;
    let command = input[index];
    index++;
    let toy = 5;
    let switcher = 15;
    let kids = 0;
    let adults = 0

    while (command !== 'Christmas') {
        let years = Number(command);

        if (years <= 16) {
            kids++

        } else if (years > 16) {
            adults++;
        }
        command = input[index];
        index++
    }
    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${toy * kids}`);
    console.log(`Money for sweaters: ${switcher * adults}`);
}
christamsGifts(["16",
    "16",
    "16",
    "16",
    "16",
    "Christmas"])