function factorChain(arr) {
  // loop through array
  // if any consecutive value can't be divided by the preceeding value
  // return false
  let result = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] % arr[i] !== 0) {
      result = false;
      break;
    }
  }
  return result;
}

// test function
function assertEqual(expected, actual, testName) {
  if (expected === actual) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}. Expected ${expected}, got ${actual}`);
  }
}

// test cases
// array is factor chain
let input1 = [1, 2, 4, 8, 16, 32];
let expected1 = true;
let actual1 = factorChain(input1);
assertEqual(expected1, actual1, "Should return true for the array that is a factorial chain");

// array is not factor chain
let input2 = [2, 4, 6, 7, 12];
let expcted2 = false;
let actual2 = factorChain(input2);
assertEqual(expcted2, actual2, "Should return false for array that is not a factorial chain");