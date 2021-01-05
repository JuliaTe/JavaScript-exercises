function objectToArray(obj) {
  //placeholder array
  // triverse through object
  // store each key value pair as inner array
  let resultArray = [];
  for (key in obj) {
    resultArray.push([key, obj[key]]);
  }
  return resultArray;
}

// Test function
function assertArraysEqual(expected, actual, testName) {
  let equalLength = expected.length === actual.length;

  let equalValues = true;
  for (let i = 0; i < expected.length; i++) {
    console.log(expected[i] === actual[i])
    console.log(expected[i], actual[i])
    // if (expected[i] == actual[i]) {
    //   // console.log(expected[i], actual[i]);
    //   console.log('hello', [i]);

    // }
  }

  if (equalLength && equalValues) {
    console.log('PASSED');
  } else {
    console.log(`Test ${testName} FAILED.\n Expected ${expected},\n got ${actual}`);
  }
}

// Test cases
let inputObj = {
  likes: 2,
  dislikes: 3,
  followers: 10
};

objectToArray(inputObj);

let expectedOutput = [["likes", 2], ["dislikes", 3], ["followers", 10]];
let actualOutput = objectToArray(inputObj);

assertArraysEqual(expectedOutput, actualOutput, 'Should transform correctly object into an array of objects');