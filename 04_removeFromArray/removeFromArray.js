const removeFromArray = function(array, ...args) {
    let newArray = array;
    for (const arg of args){
        let index = newArray.indexOf(arg);
        while(index != -1){
            newArray = newArray.toSpliced(index, 1);
            index = newArray.indexOf(arg);
            console.log(newArray);
            console.log(index);
            console.log(arg);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
