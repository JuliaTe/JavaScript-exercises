// FUNCTION DEFINITION(S)
function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj[lastName];

  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }

  return obj;
}

// ASSERTION FUNCTION(S) TO BE USED
function assertObjectsEqual(expected, actual, testName) {
    expected = JSON.stringify(expected)
    actual = JSON.stringify(actual)
    if (actual === expected) {
        console.log('passed')
    } else {
        console.log(`FAILED [${testName}] Expected ${expected}, got ${actual}`)
    }
}

// TESTS CASES
// 1. Result of {"name": "Julia", "lastName": "Thea"} should be equal to {"name": "Julia", "lastName": "Thea"}
let result1 = {"name": "Julia", "lastName": "Thea"}
asserObjectsEqual(result1, )

