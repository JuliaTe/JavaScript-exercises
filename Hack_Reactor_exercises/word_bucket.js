function bucketize(phrase, n) {
  // define placeholder/result array
  // split phrase string into an array
  // iterate over array
  // if a value is less than n, push it into array with empty space
  // if value is more than n, push it into array
  // if phrase is more than n, return an empty array
  // return result array

  let result = [''];
  
  let phraseArray = phrase.split(' ');
  for (let i = 0; i < phraseArray.length; i++) {
    let word = phraseArray[i];
    if (word.length + 1 <= n ) {
      if (result.length === 1) {
        result.push(word);
        console.log(result);
      } 
      // console.log('Less than n ', word);
      // result.push(word);
      // console.log(result);
    } else {
      result = [];
    }
  }
  return result.pop();
}

// Test function
function assertArraysEqual(expected, actual, testName) {
  let equalLength = expected.length && actual.length;

  let equalValue = true;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      equalValue = false;
      break;
    }
  }

  if (equalLength && equalValue) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}. Expected ${expected}, got ${actual}`);
  }
}

// Test cases
let phrase1 = "she sells sea shells by the sea";
let n1 = 10;
let expected1 = ["she sells", "sea shells", "by the sea"];
let actual1 = bucketize(phrase1, n1);
assertArraysEqual(expected1, actual1, 'Should backetize correctly');
console.log(actual1);

let phrase2 = "the mouse jumped over the cheese";
let n2 = 7;
let expected2 = ["the", "mouse", "jumped", "over", "the", "cheese"];
let actual2 = bucketize(phrase2, n2);
assertArraysEqual(expected2, actual2, 'Should backetize correctly');
console.log(actual2);

let phrase3 = "fairy dust coated the air";
let n3 = 20;
let expected3 = ["fairy dust coated", "the air"];
let actual3 = bucketize(phrase3, n3);
assertArraysEqual(expected3, actual3, 'Should backetize correctly');
console.log(actual3);

let phrase4 = "a b c d e";
let n4 = 2;
let expected4 = ["a", "b", "c", "d", "e"];
let actual4 = bucketize(phrase4, n4);
assertArraysEqual(expected4, actual4, 'Should backetize correctly');
console.log(actual4);


