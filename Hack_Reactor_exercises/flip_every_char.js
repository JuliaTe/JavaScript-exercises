function flip(str) {
  // define result variable
  // iterate over the string by 2 chars
  // add the following char first, then the current to the result
  // return result

  let result = '';
  
  for (let i = 0; i < str.length; i += 2) {
    // result = str[i + 1] + str[i];
    if (i === str.length - 1) {
      result += str[i];
    } else {
      result += str[i + 1];
      result += str[i];
    }
  }
  return result;
}

// Test function
// function assertEqual(expected, actual, testName) {
//   if (expected === actual) {
//     console.log('PASSED');
//   } else {
//     console.log(`FAILED ${testName}. Expected ${expected}, got ${actual}`);
//   }
// }

// Test cases

console.log(flip('ejllo')) //=> 'jello';
console.log(flip('otatl')) //=> 'total';
console.log(flip('ebrdoom')) //> 'bedroom'
console.log(flip('ofru')) //=> 'four'