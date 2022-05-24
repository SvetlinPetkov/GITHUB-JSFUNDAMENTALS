function oldBooks(input) {
    let index = 0;
    let favBook = input[index];
    index++
    let currentBook = input[index];
    let bookIsFound = false;
    let bookCount = 0;
    while (currentBook !== "No More Books") {
        if (currentBook === favBook) {
            bookIsFound = true;
            break;
        }
        index++;
        bookCount++;
        currentBook = input[index];
    }
    if (bookIsFound === false) {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCount} books.`);
    } else {
        console.log(`You checked ${bookCount} books and found it.`);
    }
}

oldBooks(["Troy",
"Stronger",
"Life Style",
"Troy"])