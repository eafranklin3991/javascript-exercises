const convertToCelsius = function(degrees) {
  let degrees_rounded = Math.round(degrees) * 10 / 10;
  return (degrees_rounded - 32) * (5/9);
};

const convertToFahrenheit = function(degrees) {
  let degrees_rounded = Math.round(degrees) * 10 / 10;
  return (degrees_rounded * (9/5)) - 459.67;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
