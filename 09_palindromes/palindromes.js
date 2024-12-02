const palindromes = function (string) {
    string = string.replace(/[^\w]/g, '').toLowerCase();
    reversedStr = ((string.split("")).reverse()).join("");
    console.log(reversedStr);
    return string == reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
