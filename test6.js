// Skeleton

// FUNCTION DEFINITION(S)
function isIsogram(text) {
  let myArray = text.toLowerCase().split('')
  let mySet = new Set()
  // add each char to a set
  for (i in myArray) {
    mySet.add(myArray[i])
  }
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// note: a set drops dup values
// thus, to see if all the chars were unique,
// check length of text and the size of the set
// console.log(myArray.length)
// console.log(mySet.size)
    if (myArray.length === mySet.size) {
      return true
    } else {
      return false
    }
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
pass1 = 'abcd'
assertEqual(true, isIsogram(pass1), 'Should be isogram')

pass2 = 'aTn'
assertEqual(true, isIsogram(pass2), 'Should be isogram')

fail1 = 'aabc'
assertEqual(false, isIsogram(fail1), 'Should not be isogram')

fail2 = 'aAt'
assertEqual(false, isIsogram(fail2), 'Should not be isogram')




