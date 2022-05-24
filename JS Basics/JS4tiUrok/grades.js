function grades(input){
    let studentsNum = Number(input[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let sumGrade = 0;

    for(i = 1; i <= studentsNum; i++){
        let currentGrede = Number(input[i]);
        if(currentGrede >= 5){
            p1++;
            sumGrade+= currentGrede;
        }else if(currentGrede >= 4 && currentGrede <= 4.99){
            p2++;
            sumGrade+= currentGrede;
        }else if(currentGrede >= 3 && currentGrede <= 3.99){
            p3++;
            sumGrade+= currentGrede;
        }else{
            p4++;
            sumGrade+= currentGrede;
        }
    }
    console.log(`Top students: ${(p1 / studentsNum * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(p2 / studentsNum * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(p3 / studentsNum * 100).toFixed(2)}%`);
    console.log(`Fail: ${(p4 / studentsNum * 100).toFixed(2)}%`);
    console.log(`Average: ${(sumGrade / studentsNum).toFixed(2)}`);
}

grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"])