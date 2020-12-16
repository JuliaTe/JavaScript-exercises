// FUNCTION DEFINITION(S)
function square(n) {
  return n * n;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertEqual(actual, expected, testName) {
    if (actual === expected) {
        console.log('passed')
    } else {
        console.log(`FAILED [${testName}]`)
    }
}

// TESTS CASES
let result1 = square(5)
assertEqual(result1, 25, 'Should return 25')

let result2 = square(0)
assertEqual(result2 === 0), 'Should return 0'