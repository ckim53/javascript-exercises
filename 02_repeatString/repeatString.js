const repeatString = function(string, occurrences) {
    let finalString = "";
    let i = occurrences;
    if (i < 0){
        return "ERROR";
    }
    while (i > 0){
        finalString = finalString.concat(string);
        i--;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
