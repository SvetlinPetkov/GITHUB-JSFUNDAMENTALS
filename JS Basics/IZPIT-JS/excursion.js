function excursion(input){
let peopleNum = input[0];
let overnightNum = input[1];
let transportCardNum = input[2];
let muzTickets = input[3];
let overnightSum = peopleNum * overnightNum * 20;
let transportCardSum = peopleNum * transportCardNum * 1.60;
let muzTicketsSum = peopleNum * muzTickets * 6;
let sum = (overnightSum + transportCardSum + muzTicketsSum) * 1.25;
console.log(sum.toFixed(2));
}

excursion(["131",
"9",
"33",
"46"])