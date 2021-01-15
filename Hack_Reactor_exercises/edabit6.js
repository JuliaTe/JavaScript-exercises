function reverse(str) {
  // create a result array
  // transform string into array
  // reverse it
  // loop through, reverse the case, push to the result array
  let result = [];
  let transformed = str.split("").reverse();
  for (let i = 0; i < transformed.length; i++) {
    let letter = transformed[i];
    if (letter === letter.toUpperCase()) {
      result.push(letter.toLowerCase());
    } else {
      result.push(letter.toUpperCase());
    }
  }

  return result.join("");

}

// Test function
function assertEqual(expected, actual, testName) {
  if (expected === actual) {
    console.log('PASSED')
  } else {
    console.log(`FAILED ${testName}\n Expected ${expected},\n got ${actual}`)
  }
}

// Test cases
// reverse("Radar") ➞ "RADAr"
let input1 = "Radar";
let expected1 = "RADAr";
let actual1 = reverse(input1);
assertEqual(expected1, actual1, 'Should return string in reverse order, with the opposite case');

// Empty string
let input2 = "";
let expected2 = "";
let actual2 = reverse(input2);
assertEqual(expected2, actual2, "Should return an empty string if empty strig is an input");


