// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
  // uses sum function
  // returns the average of an array of numbers
  let averageNum = sum(numbers) / numbers.length
  return averageNum
}

function sum(numbers) {
  // returns the sum of an array of numbers
  let sumResult = 0
  for (i in numbers) {
      sumResult += numbers[i]
  }
  
  return sumResult
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
// 1. Test sum function
// let inputArray = [1, 2, 3]
// let expectedResult = 6
// let actualResult = sum(inputArray)
// assertEqual(expectedResult, actualResult, "Should display the correct sum of numbers in an array")

// 2. Test average function
let inputNumbers = [2, 2]
let expectedResult = 2
let actualResult = average(inputNumbers)
assertEqual(expectedResult, actualResult, "Should display the correct sum of numbers in an array")
