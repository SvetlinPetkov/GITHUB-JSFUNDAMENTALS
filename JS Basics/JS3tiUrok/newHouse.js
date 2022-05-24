function newHouse(input) {
    let type = input[0];
    let num = Number(input[1]);
    let budget = Number(input[2]);
    let money = 0
    switch (type) {
        case 'Roses':
            money = num * 5;
            if (num > 80) {
                money *= 0.90;
            }
            break;
        case 'Dahlias':
            money = num * 3.80;
            if (num > 90) {
                money *= 0.85;
            }
            break;
        case 'Tulips':
            money = num * 2.80;
            if (num > 80) {
                money *= 0.85;
            }
            break;
        case 'Narcissus':
            money = num * 3;
            if (num < 120) {
                money *= 1.15;
            }
            break;
        case 'Gladiolus':
            money = num * 2.50;
            if (num < 80) {
                money *= 1.20;
            }
            break;
    }
    let sumLeft = Math.abs(budget - money);
    if (budget >= money) {
        console.log(`Hey, you have a great garden with ${num} ${type} and ${sumLeft.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${sumLeft.toFixed(2)} leva more.`)
    }
}

newHouse(["Narcissus",
"0",
"360"])