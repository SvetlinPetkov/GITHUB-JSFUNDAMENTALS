function trekkingMania(input) {
    let groupNum = Number(input[0]);
    let totalGroup = 0
    let group1 = 0
    let group2 = 0
    let group3 = 0
    let group4 = 0
    let group5 = 0
    for (let i = 1; i <= groupNum; i++) {
        let currentGroup = Number(input[i]);
        totalGroup += currentGroup;
        if (currentGroup < 6) {
            group1 += currentGroup;
        } else if (currentGroup < 13) {
            group2 += currentGroup;
        } else if (currentGroup < 26) {
            group3 += currentGroup;
        } else if (currentGroup < 41) {
            group4 += currentGroup;
        } else {
            group5 += currentGroup;
        }
    }
    console.log((group1 / totalGroup * 100).toFixed(2) + '%')
    console.log((group2 / totalGroup * 100).toFixed(2) + '%')
    console.log((group3 / totalGroup * 100).toFixed(2) + '%')
    console.log((group4 / totalGroup * 100).toFixed(2) + '%')
    console.log((group5 / totalGroup * 100).toFixed(2) + '%')
}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])