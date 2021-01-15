function multiplyNums(nums) {
  // define sum result placeholder
  // transform input string into array
  // loop through the array
  // add elements to sum
  // return sum

  let sum = 1;
  let numsArray = nums.split(", ");
  for (let i = 0; i < numsArray.length; i++) {
    let number = numsArray[i];
    sum = parseInt(number) * sum;
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
let input = "1, 2, 3, 4";
multiplyNums(input);
let expectedResult = 24;
let actualResult = multiplyNums(input);
assertEqual(expectedResult, actualResult, "Should calculate sum correctly");

let input2 = "-19, -22, -14, 20,  -15, -24, -17, 19, 30, -10";
let expectedResult2 = -4082823360000;
let actualResult2 = multiplyNums(input2);
assertEqual(expectedResult2, actualResult2, "Should calculate sum correctly");

let input3 = "-1, 4, -10, 2";
let expectedResult3 = 80;
let actualResult3 = multiplyNums(input3);
assertEqual(expectedResult3, actualResult3, "Should calculate sum correctly");