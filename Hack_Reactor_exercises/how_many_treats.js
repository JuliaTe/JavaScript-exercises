function howManyTreats(actions) {
  // define counter which is the result
  // define action to look for
  // iterate over actions
  // when the action we looking for is found, update the counter
  // return the counter

  let result = 0;
  let action = 'brought the paper';
  for (let i = 0; i < actions.length; i++) {
    let currentDay = actions[i];
    if (currentDay['action'] === action) {
      result += 1;
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
let input1 = [
  {day: 'Monday', action: 'ran around the yard'},
  {day: 'Tuesday', action: 'barked at strangers'},
  {day: 'Wednesday', action: 'brought the paper'},
  {day: 'Thursday', action: 'dug a hole'},
  {day: 'Friday', action: 'brought the paper'},
  {day: 'Saturday', action: 'brought the paper'},
  {day: 'Sunday', action: 'went to sleep'},
];

let expected1 = 3;
let actual1 = howManyTreats(input1);
assertEqual(expected1, actual1, 'Should calculate the treats correctly');
console.log(howManyTreats(input1));
