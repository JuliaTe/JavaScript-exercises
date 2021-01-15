function getFrequencies(arr) {
  // define placeholder object
  // loop through array
  // if a current element is in object, increment corresponding value in the object
  // otherwise add the elemnt to the object with the value equal to 1
  // return the object

  let result = {};
  
  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element in result) {
      result[element] += 1;
    } else {
      result[element] = 1;
    }
  }
  return result;
}

// Test function
function assertObjectsEqual(expected, actual, testName) {
  expected = JSON.stringify(expected);
  actual = JSON.stringify(actual);

  if (expected === actual) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}. Expected ${expected}, got ${actual}`);
  }
}

// Test cases
// elements are letters
let input1 = ["A", "B", "A", "A", "A"];
let expected1 = { A: 4, B: 1 };
let actual1 = getFrequencies(input1);
assertObjectsEqual(expected1, actual1, "Should return the objects with letters count");

// elements are numbers
let input2 = [1, 2, 3, 3, 2];
let expected2 = { "1": 1, "2": 2, "3": 2 };
let actual2 = getFrequencies(input2);
assertObjectsEqual(expected2, actual2, "Should return the objects with numbers count");

// elements are booleans
let input3 = [true, false, true, false, false];
let expected3 = { true: 2, false: 3 };
let actual3 = getFrequencies(input3);
assertObjectsEqual(expected3, actual3, "Should return the objects with booleans count");

// input is an empty array
let input4 = [];
let expected4 = {};
let actual4 = getFrequencies(input4);
assertObjectsEqual(expected4, actual4, "Should return an empty object");
