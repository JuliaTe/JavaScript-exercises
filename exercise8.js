// Skeleton

// FUNCTION DEFINITION(S)
function findLongestPalindrome(sentence) {
  // split sentence into words
  wordsArray = sentence.split(' ')
  // iterate words and collect the palindromes
  let palindromesArray = []
  for (let i = 0; i < wordsArray.length; i++) {
    if (isPalindrome(wordsArray[i])) {
      palindromesArray.push(wordsArray[i])
    }
  }

  // sort the list of palindromes by word length
  palindromesArray.sort(sortAscendingByLength)

  // return the largest item in the sorted list
  return palindromesArray.pop()
}

function reverseString(string) {
  string = string.split('').reverse().join('')
  return string
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse
  word = word.toLowerCase()
  let reversedWord = reverseString(word)
  if(word === reversedWord) { return true; } else { return false; }
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(expected, actual, testName) {
  if (expected === actual) {
      console.log('passed')
  } else {
      console.log(`FAILED [${testName}] Expected ${expected}, got ${actual}`)
  }
}

// TESTS CASES
let palindrome_test = 'adrtrda'
let non_palindrome_test = 'abcde'

let palindrome_result = isPalindrome(palindrome_test)
assertEqual(true, palindrome_result, 'Should return true if the world is palindrome')

let non_palindrome_result = isPalindrome(non_palindrome_test)
assertEqual(false, non_palindrome_result, 'Should return false when the word is not palindrome')
