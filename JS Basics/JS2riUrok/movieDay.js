function movieDay(input) {
    let shootingTime = Number(input[0]);
    let sceneNm = Number(input[1]);
    let timePerScene = Number(input[2]);
    let terrainPrep = shootingTime * 0.15;
    let neededTime = (sceneNm * timePerScene) + terrainPrep;
    if (shootingTime >= neededTime) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(shootingTime - neededTime)} minutes left!`)
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(neededTime - shootingTime)} minutes.`)
    }

}

movieDay([60, 15, 3])