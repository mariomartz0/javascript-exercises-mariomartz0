const sumAll = function (int1, int2) {
  // Checks if any of the numbers provided are negative or
  // If any of the numbers provided are not an integer
  // If any of the above conditions are met, returns error
  if (
    int1 < 0 ||
    int2 < 0 ||
    !Number.isInteger(int1) ||
    !Number.isInteger(int2)
  ) {
    return "ERROR";
  }

  // Checks which number is bigger to set start and end of range
  let start;
  let end;
  if (int1 < int2) {
    start = int1;
    end = int2;
  } else {
    start = int2;
    end = int1;
  }

  // Always starts summing up from the smallest number to the biggest
  let totalSum = 0;
  for (let i = start; i <= end; i++) {
    totalSum += i;
  }

  return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
