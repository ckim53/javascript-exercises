const fibonacci = function(num) {
    if (num == 0){
        return 0;
    }
    if (num < 0){
        return "OOPS";
    }
    
    let count = 0;
    let current = 1, next = 1, prev = 1; 
    let array = [1, 1];

    while (array.length < num){
        next = current + prev;
        console.log(`next: ${next}`);
        array.push(next);
        prev = current;
        current = next;
        
        console.log(array);
        count += 1;
    }
    return array[count+1];
};

// Do not edit below this line
module.exports = fibonacci;
