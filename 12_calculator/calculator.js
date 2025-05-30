const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const multiply = function (arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (integer) {
  const numArr = [];

  for (let i = 1; i <= integer; i++) {
    numArr.push(i);
  }

  return numArr.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
