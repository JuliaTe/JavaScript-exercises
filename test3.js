// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray = newArray + callbackFunction(element);
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
      console.log(`FAILED`)
    }
}

assertArraysEqual([1,2,2], [1,3,2], 'This is test')

// TESTS CASES