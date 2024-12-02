const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
	for (num of array){
    sum += num;
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
	for (num of array){
    product *= num;
  }
  return product;
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(num) {
  let count = num;
  let product = 1;
  if (num == 0){
    return 1;
  }
  while (count > 0){
    product *= count;
    count -= 1;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
