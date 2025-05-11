// Function to return string reversed
// Takes string as a parameter
const reverseString = function (string) {
  const lastChar = string.length - 1;
  let newString = "";
  for (let i = lastChar; i >= 0; i--) {
    newString += string.charAt(i);
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
