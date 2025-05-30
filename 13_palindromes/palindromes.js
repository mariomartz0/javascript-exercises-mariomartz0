const palindromes = function (string) {
  // converts string to lower case, removes punctuation, removes white space
  string = string.toLowerCase().replaceAll(/\p{P}/gu, "").replaceAll(" ", "");
  // reverses the string
  let stringReversed = Array.from(string).reverse().join("");

  return string === stringReversed;
};

// Do not edit below this line
module.exports = palindromes;
