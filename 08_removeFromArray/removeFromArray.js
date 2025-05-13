const removeFromArray = function (arr, valueToRemove) {
  // arr.length needs to be calculated every iteration because the size
  // of the array could change
  for (let i = 0; i < arr.length; i++) {
    for (let argIndex = 1; argIndex <= arguments.length; argIndex++) {
      if (arr[i] === arguments[argIndex]) {
        arr.splice(i, 1);
        // Decrements index to adjust for new array
        if (i > 0) {
          i--;
        }
      }
    }
  }

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
