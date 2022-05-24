function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let num = Number(input[2]);
    switch (day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if (fruit === 'banana') {
                num = (num * 2.50).toFixed(2);
                break;
            } else if (fruit === 'apple') {
                num = (num * 1.20).toFixed(2);
                break;
            } else if (fruit === 'orange') {
                num = (num * 0.85).toFixed(2);
                break;
            } else if (fruit === 'grapefruit') {
                num = (num * 1.45).toFixed(2);
                break;
            } else if (fruit === 'kiwi') {
                num = (num * 2.70).toFixed(2);
                break;
            } else if (fruit === 'pineapple') {
                num = (num * 5.50).toFixed(2);
                break;
            } else if (fruit === 'grapes') {
                num = (num * 3.85).toFixed(2);
                break;
            }
        case 'Saturday':
        case 'Sunday':
            if (fruit === 'banana') {
                num = (num * 2.70).toFixed(2);
                break;
            } else if (fruit === 'apple') {
                num = (num * 1.25).toFixed(2);
                break;
            } else if (fruit === 'orange') {
                num = (num * 0.90).toFixed(2);
                break;
            } else if (fruit === 'grapefruit') {
                num = (num * 1.60).toFixed(2);
                break;
            } else if (fruit === 'kiwi') {
                num = (num * 3.00).toFixed(2);
                break;
            } else if (fruit === 'pineapple') {
                num = (num * 5.60).toFixed(2);
                break;
            } else if (fruit === 'grapes') {
                num = (num * 4.20).toFixed(2);
                break;
            } 
        default:
            num = 'error'
            break;
    }
    console.log(num)

}

fruitShop(["tomato",
"Monday",
"0.5"])