function identicalFilter(arr) {
  // define result placeholder
  // loop through input array
  // transform each element into array
  // if all elements equal, push into result array
  // return result array

  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i].split('');
    let elementSet = new Set(element);
    if (elementSet.size === 1) {
      result.push(element.join(''))
    }
  }
	return result;
}

// Test function
function assertArrayEqual(expected, actual, testName) {
  let equalLength = expected.length === actual.length;

  let equalValue = true;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      equalValue = false;
      break;
    }
  }

  if (equalValue && equalLength) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}. Expected ${expected}, got ${actual}`);
  }
}

// Test cases
let input1 = ["aaaaaa", "bc", "d", "eeee", "xyz"];
let expected1 = ["aaaaaa", "d", "eeee"];
let actual1 = identicalFilter(input1);
assertArrayEqual(expected1, actual1, "Should result in correct array of letters")

let input2 = ["88", "999", "22", "545", "133"];
let expected2 = ["88", "999", "22"];
let actual2 = identicalFilter(input2);
assertArrayEqual(expected2, actual2, "Should result in correct array of numbers")

let input3 = ["xxxxo", "oxo", "xox", "ooxxoo", "oxo"];
let expected3 = [];
let actual3 = identicalFilter(input3);
assertArrayEqual(expected3, actual3, "Should display an empty array")