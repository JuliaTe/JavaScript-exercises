// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    let element = array[i]
    let result = callbackFunction(element);
    newArray.push(result)
  }

  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n;
  });
}

// ASSERTION FUNCTION(S) TO BE USED
function assertArraysEqual(expected, actual, testName) {
  let equalLength = expected.length === actual.length
    
  let equalValues = true
    for (i in expected) {
      if (expected[i] !== actual[i]) {
        equalValues = false
        break
        }
    }
    
    if (equalLength && equalValues) {
        console.log('passed')
    } else {
      console.log(`FAILED [${testName}] Expected ${expected}, got ${actual}`)
    }
}

// TESTS CASES
function addTwo(val) {
    val += 2
}

let arrayForMap = [1, 2, 3]
let actualMap = map(arrayForMap, addTwo)
let expectedMap = [3, 4, 5]
assertArraysEqual(expectedMap, actualMap, 'Should correctly map elements of an array')



