function footbalResult(input){
    let one = input[0];
    let two = input[1];
    let three = input[2];
    let winCounter = 0;
    let loseCounter = 0;
    let evenCounter = 0;
    
    let teamA = Number(one[0]);
    let teamB = Number(one[2]);
    if(teamA > teamB){
        winCounter++;
    }else if(teamA < teamB){
        loseCounter++;
    }else{
        evenCounter++
    }

    teamA = Number(two[0]);
    teamB = Number(two[2]);
    if(teamA > teamB){
        winCounter++;
    }else if(teamA < teamB){
        loseCounter++;
    }else{
        evenCounter++
    }

    teamA = Number(three[0]);
    teamB = Number(three[2]);
    if(teamA > teamB){
        winCounter++;
    }else if(teamA < teamB){
        loseCounter++;
    }else{
        evenCounter++
    }
    console.log(`Team won ${winCounter} games.`);
    console.log(`Team lost ${loseCounter} games.`);
    console.log(`Drawn games: ${evenCounter}`);
}
footbalResult(["0:2",
"0:1",
"3:3"])