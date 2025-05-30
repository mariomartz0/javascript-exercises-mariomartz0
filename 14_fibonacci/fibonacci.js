// Create a function that returns a specific member of the fibonacci sequence
const fibonacci = function (member) {
  // 1, 1, 2, 3, 5, 8, etc
  const sequence = [1, 1, 2, 3, 5, 8];

  if (member == 0) {
    return 0;
  } else if (member < 0) {
    return "OOPS";
  }

  // Checks if the member provided exists in the array yet
  if (sequence.length < member) {
    // If it doesn't exist yet, this for loop will populate the array until
    // it does exist
    // Iteration starts at second last item in array and adds it to the last
    // item to find the next member in the sequence
    for (let i = sequence.length - 2; sequence.length < member; i++) {
      sequence.push(sequence[i] + sequence[i + 1]);
    }
  }

  return sequence[member - 1];
};

// Do not edit below this line
module.exports = fibonacci;
