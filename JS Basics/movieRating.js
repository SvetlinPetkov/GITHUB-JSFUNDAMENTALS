function movieRating(input){
    let index = 0;
    let movieCount = Number(input[index]);
    index++;
    let maxRating = Number.MIN_SAFE_INTEGER;
    let maxRatingName = "";
    let minRating = Number.MAX_SAFE_INTEGER;
    let minRatingName = "";
    let sumRaiting = 0;

    for(let i = 0; i < movieCount; i++){
        let name = input[index];
        index++;
        let movieScore = Number(input[index]);
        index++;
        sumRaiting += movieScore;
        if(movieScore > maxRating){
            maxRating = movieScore;
            maxRatingName = name;
        }
        if(movieScore < minRating){
            minRating = movieScore;
            minRatingName = name;
        }
    }
    console.log(`${maxRatingName} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${minRatingName} is with lowest rating: ${minRating.toFixed(1)}`);
    let avgRating = sumRaiting / movieCount;
    console.log(`Average rating: ${avgRating.toFixed(1)}`);
}

movieRating(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])