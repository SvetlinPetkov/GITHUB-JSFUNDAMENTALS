function triangleOfNumbers(num){
    for(let row = 1; row <= num; row++){
        let line = "";
        for(let col = 1; col <= row; col++){
            line += row;
            if(col !== row){
                line += " "
            }
        }
        console.log(line);
    }
}

triangleOfNumbers(5)