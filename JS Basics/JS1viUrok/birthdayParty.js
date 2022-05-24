function birthdayParty(arg1){
    let rent = Number(arg1);
    let cacke = rent * 0.2;
    let summ = rent + cacke + (cacke * 0.55) + (rent / 3);
    console.log(summ)

}

birthdayParty(2250)