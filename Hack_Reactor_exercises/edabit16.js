function isIsogram(str) {
  // create an object to store letter counts
  // transform string into array and apply to LowerCase
  // iterate through the array
  // store each letter into object
  // if letter in object, return false
  // else return true
  let result = true;

  let letterStore = {};
  let transformedArray = str.toLowerCase().split('');
  for (let i = 0; i < transformedArray.length; i++) {
    let letter = transformedArray[i];
    if (letter in letterStore) {
      result = false;
      break;
    } else {
      letterStore[letter] = 1;
    }
  }
  return result;
}

// test function
function assertEquals(expected, actual, testName) {
  if (expected === actual) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}. Expected ${expected}, got ${actual}`)
  }
}

// test cases
let input1 = "Algorism";
let expected1 = true;
let actual1 = isIsogram(input1);
assertEquals(expected1, actual1, "Should return true for isogran");
isIsogram(input1);

let input2 = "PasSword";
let expected2 = false;
let actual2 = isIsogram(input2);
assertEquals(expected2, actual2, "Should return false for non isogram");

let input3 = "Consecutive";
let expected3 = false;
let actual3 = isIsogram(input3);
assertEquals(expected3, actual3, "Should return false for non isogram");

