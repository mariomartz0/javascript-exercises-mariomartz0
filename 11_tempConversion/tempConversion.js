// One function to convert fahrenheit to celsius
const convertToCelsius = function (fahrenheitNum) {
  // Fahrenheit to Celsius Formula: °C = (°F - 32) / 1.8
  const celsiusNum = (fahrenheitNum - 32) / 1.8;

  // Round result to one decimal place
  const roundedNum = Math.round(celsiusNum * 10) / 10;

  return roundedNum;
};

// One function to convert celsius to fahrenheit
const convertToFahrenheit = function (celsiusNum) {
  // Celsius to Fahrenheit Formula: °F = (°C * 1.8) + 32
  const fahrenheitNum = celsiusNum * 1.8 + 32;

  // Round result to one decimal place
  const roundedNum = Math.round(fahrenheitNum * 10) / 10;

  return roundedNum;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
