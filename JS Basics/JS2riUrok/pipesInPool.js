function pipesInPool(input) {
    let poolVolume = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);
    let p1L = p1 * h;
    let p2L = p2 * h;
    let p1p2L = p1L + p2L;
    let total = p1p2L * 100 / poolVolume;
    let p1Volume = p1L * 100 / p1p2L;
    let p2Volume = p2L * 100 / p1p2L;
    if (p1p2L <= poolVolume) {
        console.log(`The pool is ${total.toFixed(2)}% full. Pipe 1: ${p1Volume.toFixed(2)}%. Pipe 2: ${p2Volume.toFixed(2)}%.`)
    } else if (p1p2L > poolVolume) {
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${(p1p2L - poolVolume).toFixed(2)} liters.`)
    }

}

pipesInPool([100, 100, 100, 2.5])