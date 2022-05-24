function printAndSum(num1, num2){
    let sum = 0;
    let siqence = ""
for(let i = num1; i <= num2; i++){
    sum += i; 
    siqence += i + " ";
}
console.log(siqence);
console.log("Sum: " + sum);
}

printAndSum(5, 10)