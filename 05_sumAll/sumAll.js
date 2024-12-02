const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    let sum = 0;
    const start = Math.min(num1, num2);
    let count = Math.max(num1, num2);
    while (count >= start){
        sum += count;
        count -= 1;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
