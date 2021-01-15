function finalDirection(initial, turns) {
  // assign numbers from 1 to 4 to directions of compass
  // if it's left -1
  // if right +1
  // 

  let result = '';

  let directions = {
    'N': 1,
    'E': 2,
    'S': 3,
    'W': 4
  };

  let counter = directions[initial];

  for (let i = 0; i < turns.length; i++) {
    let currentDirection = turns[i];
    if (currentDirection === 'L') {
      counter -= 1;
    } else {
      counter += 1;
    }
  }

 let converter = Math.abs(counter % 4);

  for (j in directions) {
    if (directions[j] === converter) {
      result = j;
    }
  }

  return result;
}

// Test function
function assertEqual(expected, actual, testName) {
  if (expected === actual) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}. Expected ${expected}, got ${actual}`);
  }
}

// Test cases
let input1 = ["L", "L", "L"];
let starting1 = 'N';
let expected1 = 'E';
let actual1 = finalDirection(starting1, input1);
assertEqual(expected1, actual1, "Should return the correct direction");

let input2 = ["R", "R", "R", "L"];
let starting2 = 'N';
let expected2 = 'S';
let actual2 = finalDirection(starting2, input2);
assertEqual(expected2, actual2, "Should return the correct direction");

let input3 = ["R", "R", "R", "R"];
let starting3 = 'N';
let expected3 = 'N';
let actual3 = finalDirection(starting3, input3);
assertEqual(expected3, actual3, "Should return the correct direction");

let input4 = ["R", "L"];
let starting4 = 'N';
let expected4 = 'N';
let actual4 = finalDirection(starting4, input4);
assertEqual(expected4, actual4, "Should return the correct direction");