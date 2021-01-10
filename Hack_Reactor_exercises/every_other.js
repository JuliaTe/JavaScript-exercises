function everyOther(str) {
  // define result string
  // iterate over the str
  // add every other char to the result
  // return result
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    result += str[i];
  }
  return result;
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
let input1 = 'shwoitmj';
let input2 = 'gkloure';

let expected1 = 'swim';
let expected2 = 'glue';

let actual1 = everyOther(input1);
let actual2 = everyOther(input2);

assertEqual(expected1, actual1, 'Should return the word with every other char');
assertEqual(expected2, actual2, 'Should return the word with every other char');

// console.log(everyOther('shwoitmj')); // => 'swim'
// console.log(everyOther('gkloure')); //= > 'glue'