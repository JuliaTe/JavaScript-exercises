function killerRobots(strings) {
  // define empty result array;
  // iterate over strings array
  // define beeps counter, define boops counter
  // if beeps + boops modulus of multiplier is zero,
  // push true to result
  // else push false
  // return result array;

  let result = [];
  for (let i = 0; i < strings.length; i++) {
    let currentRobot = strings[i];
    let beeps = 0;
    let boops = 0;
    let splitString = currentRobot.str.split(' ');
    for (let j = 0; j < splitString.length; j++) {
      let currentItem = splitString[i];
      if (currentItem === 'beep') {
        beeps += 1;
      } else {
        boops += 1;
      }
    }
    if ((beeps % 4 === 0) && (boops % 4 === 0)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}

// Test function
function assertArraysEqual(expected, actual, testName) {
  let equalLength = expected.length === actual.length;

  let equalValue = true;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      equalValue = false;
      break
    }
  }

  if (equalValue && equalLength) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}. Expected ${expected}, got ${actual}`);
  }
}

// Test cases
let input1 = [
  {str: 'boop beep boop'},
  {str: 'boop boop beep beep boop boop beep beep'},
  {str: 'beep beep beep beep boop boop boop'},
  {str: 'boop boop boop boop beep beep beep beep boop boop boop boop'},
  {str: 'boop beep boop beep boop'},
  {str: 'boop beep boop beep boop boop beep boop beep boop boop beep boop beep boop boop beep boop beep boop beep'}
];

let expected1 = [false, true, false, true, false, false];
let actual1 = killerRobots(input1);
assertArraysEqual(expected1, actual1, 'Should return the correct array');

