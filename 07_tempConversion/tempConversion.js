const convertToCelsius = function(degreesFahrenheit) {
  stringVal = ((degreesFahrenheit - 32) * (5 / 9)).toFixed(1);
  return parseFloat(stringVal);

};

const convertToFahrenheit = function(degreesCelsius) {
  stringVal = ((degreesCelsius * (9 / 5)) + 32).toFixed(1);
  return parseFloat(stringVal);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
