function filmAcademy(input){
    let rent = Number(input[0]);
    let statues = rent - (rent * 0.3);
    let ketaring = statues - (statues * 0.15);
    let sound = ketaring / 2;
    let total = rent + statues + ketaring + sound;

    console.log(total.toFixed(2))

}

filmAcademy(["3500"])