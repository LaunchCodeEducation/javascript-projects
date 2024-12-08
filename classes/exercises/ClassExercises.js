// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages = pages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;

    }
    checkout() {
        this.timesCheckedOut += 1
    }
}


// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded)
    }
    dispose(currentYear = new Date().getFullYear()) {
        if (currentYear - this.copyright > 5) {
            this.discarded = true;
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded) {
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded)
    }
    dispose() {
        if (this.timesCheckedOut > 100) {
            this.discarded = true;
        }
    }
}

// Declare the objects for exercises 2 and 3 here:
let pride = new Novel(
    'Pride and Prejudice',
    'Jane Austen',
    1813,
    '11111111111',
    432,
    32,
    'false'
);
let top = new Manual('Top Secret Shuttle Building Manual',
    'Redacted',
    2013,
    '00000000000',
    1147,
    1,
    'false'
);
// Code exercises 4 & 5 here:
top.dispose();
pride.checkout(5);
console.log(pride.timesCheckedOut);
top.dispose();
pride.dispose();
console.log(top.discarded);
console.log(pride.discarded);