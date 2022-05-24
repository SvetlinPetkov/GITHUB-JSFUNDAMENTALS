function zadacha9(input) {
    let index = 0;
    let gameCount = Number(input[index]);
    index++;
    let fortniteCount = 0;
    let hearthstoneCount = 0;
    let overwatchCount = 0;
    let othersConter = 0;
    for (let i = 0; i < gameCount; i++) {
        let name = input[index];
        index++;
        switch (name) {
            case "Hearthstone":
                hearthstoneCount++;
                break;
            case "Fornite":
                fortniteCount++;
                break;
            case "Overwatch":
                overwatchCount++;
                break;
            default: 
            othersConter++;
            break;
        }
    }
    let fortniteP = fortniteCount / gameCount * 100;
    let hearthstoneP = hearthstoneCount / gameCount * 100;
    let overwatchP = overwatchCount / gameCount * 100;
    let othersP = othersConter / gameCount * 100;
    console.log(`Hearthstone - ${hearthstoneP.toFixed(2)}%`);
    console.log(`Fornite - ${fortniteP.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatchP.toFixed(2)}%`);
    console.log(`Others - ${othersP.toFixed(2)}%`);
}

zadacha9(["4",
    "Hearthstone",
    "Fornite",
    "Overwatch",
    "Counter-Strike"])