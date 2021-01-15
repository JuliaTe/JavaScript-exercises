function censor(str) {
  // define a placeholder array
  // transform str into array
  // iterate through array
  // if element length is more than 4 chars, replace it with *, one per char
  // insert into result array
  // return array, join it into string

  let result = [];
  let transformed = str.split(" ");
  for (let i = 0; i < transformed.length; i++) {
    let word = transformed[i];
    let astericksCount = '*';
    if (word.length > 4) {
      for (let j = 0; j < word.length - 1; j++) {
        astericksCount += '*';
      }
      result.push(astericksCount);
    } else {
      result.push(word);
    }
  }
  return result.join(' ');
}

// Test function
function assertEqual(expected, actual, testName) {
  if (expected == actual) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}. Expected ${expected}, got ${actual}`)
  }
}

// Test cases
let input1 = "The code is fourty";
let expected1 = "The code is ******";
let actual1 = censor(input1);
assertEqual(expected1, actual1, "Should display words over 4 chars")

let input2 = "Two plus three is five";
let expected2 = "Two plus ***** is five";
let actual2 = censor(input2);
assertEqual(expected2, actual2, "Should display words over 4 chars")

let input3 = "aaaa aaaaa 1234 12345";
let expected3 = "aaaa ***** 1234 *****";
let actual3 = censor(input3);
assertEqual(expected3, actual3, "Should display words over 4 chars")

