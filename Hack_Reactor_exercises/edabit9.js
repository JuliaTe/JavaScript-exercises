function replaceVowel(word) {
  // create an object with vowels and corresponding numbers
  // placeholder result
  // split string word into array
  // loop through array and compare a current element to elements in object
  // if array element is in object keys
  // replace array element with value of the corresponding key in the object
  // resturn result
  let result = [];
  let vowels = {
    'a': 1,
    'e': 2,
    'i': 3,
    'o': 4,
    'u': 5
  }

  let wordArray = word.split('');
  for (let i = 0; i < wordArray.length; i++) {
    let letter = wordArray[i];
    if (letter in vowels) {
      result.push(vowels[letter]);
      console.log(vowels[letter]);
    } else {
      result.push(letter);
    }
  }
  
	return result.join('');
}

// Test function
function assertEqual(expected, actual, testName) {
  if (expectedResult === actual) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}. Expected ${expected}, got ${actual}.`)
  }
}

// Test cases
let input = "khandbari";
let expectedResult = "kh1ndb1r3";
let actualResult = replaceVowel(input);
assertEqual(expectedResult, actualResult, 'Should replace vowels correctly');