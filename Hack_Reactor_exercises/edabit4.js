function isSpecialArray(arr) {
  // iterate through array
  // if index is even, corresponding element should be even
  // if index is odd, corresponding elemnet should be odd
  // if index is even, but element is odd => return false
  // if index is odd, but element is even => return false
  let result = true;
	for (let i = 0; i < arr.length; i++) {
    console.log('iteration: ', i, arr[i]);
    if ((i % 2 === 0 && arr[i] % 2 !== 0) || (i % 2 !== 0 && arr[i] % 2 === 0)) {
      result = false;
    }
  }
  return result;
} 

// Test function
function assertEqual(expected, actual, testName) {
  if (expected === actual) {
    console.log('PASSED');
  } else {
    console.log(`${testName} FAILED\n Expected ${expected},\n got ${actual}`)
  }
}

// Test cases
let positiveCase = [2, 7, 4, 9, 6, 1, 6, 3];
let negativeCase = [2, 7, 9, 1, 6, 1, 6, 3];

let actualPositive = isSpecialArray(positiveCase);
let actualNegative = isSpecialArray(negativeCase);

let expectedPositive = true;
let expectedNegativbe = false;

assertEqual(expectedPositive, actualPositive, 'Should return true if array is special');
assertEqual(expectedNegativbe, actualNegative, 'Should return false if array is not special');