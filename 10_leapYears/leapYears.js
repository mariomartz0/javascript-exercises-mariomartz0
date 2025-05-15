// Create a function that determines whether or not a given year is a leap year
/*
  Leap years are determined by the following rules:
    Leap years are years divisible by four (like 1984 and 2004)
    Years divisible by 100 are not leap years (such as 1800 and 1900)
      (Unless they are divisible by 400 (like 1600 and 2000))
*/

const leapYears = function (year) {
  let isLeapYear = false;

  // Condition 1: A leap year must be divisible by 4
  if (year % 4 === 0) {
    // Condition 2: A year that is divisible by 100 can only be a
    // leap year if it is also divisble by 400
    if (year % 100 === 0 && year % 400 !== 0) {
      return isLeapYear;
    }
    return (isLeapYear = true);
  }

  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
