function indexMultiplier(arr) {
  // define sum placeholder
  // loop through array
  // multiply each element by its index
  // add the result to sum
  // return sum
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += i * arr[i];
  }
  return sum;
}

// Test function
function assertEqual(expected, actual, testName) {
  if (expected === actual) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}. Expected ${expected}, got ${actual}`);
  }
}

// Test cases
// positive case
let input1 = [1, 2, 3, 4, 5];
let expected1 = 40;
let actual1 = indexMultiplier(input1);
assertEqual(expected1, actual1, 'Should display the correct sum of elements');

// for an empty array
let input2 = [];
let expected2 = 0;
let actual2 = indexMultiplier(input2);
assertEqual(expected2, actual2, "Should return 0 for an empty array");
