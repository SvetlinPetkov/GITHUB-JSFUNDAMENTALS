function thePyramidOfKingDjoser(base, increment){
let totalStone = 0;
let totalMarble = 0;
let totalLapisLazuli = 0;
let gold = 0;
let step = 0;
while(base > 2){
    let marble = base * 4 - 4;
    let stone = base * base - marble;
    totalStone += stone;
    step++;
    if(step % 5 === 0){
        totalLapisLazuli += marble;
    }else{
        totalMarble += marble;
    }
    base -= 2;
}
step++
gold = base * base;

console.log(`Stone required: ${Math.ceil(totalStone * increment)}`);
console.log(`Marble required: ${Math.ceil(totalMarble * increment)}`);
console.log(`Lapis Lazuli required: ${Math.ceil(totalLapisLazuli * increment)}`);
console.log(`Gold required: ${Math.ceil(gold * increment)}`);
console.log(`Final pyramid height: ${Math.floor(step * increment)}`);
}

thePyramidOfKingDjoser(11, 0.75)