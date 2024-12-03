const getTheTitles = function(books) {
    let array = [];
    for (book of books) {
        array.push(book.title);
    }
    return array;
};

// Do not edit below this line
module.exports = getTheTitles;
