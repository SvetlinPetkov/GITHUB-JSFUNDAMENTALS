function login(input) {
    let username = input[0];
    let counter = 1;
    for (let i = 1; i < input.length; i++) {
        let reverseString = input[i];
        reverseString = reverseString.split("").reverse().join("")
        if(counter === 4 && reverseString !== username){
            console.log(`User ${username} blocked!`);
            break;
        }
        if(reverseString !== username){
            console.log(`Incorrect password. Try again.`);
        }else{
            console.log(`User ${username} logged in.`);
        }
        counter++;
    }
}
login(['Acer','login','go','let me in','recA'])
