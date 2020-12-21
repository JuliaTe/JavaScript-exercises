// 3) --------------------------------------

/*Science Experiment
 */

let input = [
  {
    day: 'Monday', 
    food: ['banana', 'ice cream', 'apple', 'leaf', 'cheese']
  },
  {
    day: 'Tuesday',  
    food: ['candy', 'cake', 'ice cream', 'cheese'],
  },
  {
    day: 'Wednesday', 
    food: ['leaf', 'cheese', 'jelly', 'hamburger'],
  },
  {
    day: 'Thursday',
    food:['hamburger', 'banana', 'leaf', 'tomato'],
  },
  {
    day: 'Friday',
    food:['ice cream', 'apple', 'leaf', 'pie', 'cake'],
  },
  {
    day: 'Saturday',
    food: ['apple', 'leaf', 'pie', 'cheese', 'candy', 'tomato'],
  }
]

//a) Given an array of the days the caterpillars ate and the food they consumed, find out how many days a particular food was eaten.

function hungryCaterpillars(arr, food) {
  // define placeholder result
  // iterate over the input array
  // if element equal to param food found, incremenent result
  // return result

  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let oneDay = arr[i];
    for (let j = 0; j < oneDay['food'].length; j++) {
      let oneFoodItem = oneDay['food'][j];
      if (oneFoodItem === food) {
        result += 1;
      }
    }
  }

  return result;
}

// Test function
// function assertEqual(expected, actual, testName) {
//   if (expected === actual) {
//     console.log('PASSED');
//   } else {
//     console.log(`FAILED ${testName}. Expected ${expected}, got ${actual}`)
//   }
// }

// Test cases
expected1 = 3;
actual1 = hungryCaterpillars(input, 'apple');
// assertEqual(expected1, actual1, "Should return the correct number of apples eaten");

expected2 = 2;
actual2 = hungryCaterpillars(input, 'tomato');
// assertEqual(expected1, actual1, "Should return the correct number of toamtos eaten");

//------------------------------

//b) Given an array of data, return an object of all the foods and how many times they were eaten over the week.

function howManyTimes(arr) {
  // define placeholder result object
  // iterate over food array
  // if a food is in result object, increment count by 1
  // otherwise add the food to the object with the value = 1
  // return the result

  let result = {};
  for (let i = 0; i < arr.length; i++) {
    let oneDay = arr[i];
    for (let j = 0; j < oneDay['food'].length; j++) {
      let currentFoodItem = oneDay['food'][j];
      if (currentFoodItem in result) {
        result[currentFoodItem] += 1;
      } else {
        result[currentFoodItem] = 1;
      }
    }
  }

  return result;
}

// Test function
// function assertObjectsEqual(expected, actual, testName) {
//   expected = JSON.stringify(expected);
//   actual = JSON.stringify(actual);

//   if (expected === actual) {
//     console.log('PASSED');
//   } else {
//     console.log(`FAILED ${testName}.\nExpected ${expected},\ngot ${actual}`);
//   }
// }

// Test cases
expected2 = {
  'banana': 2,
  'ice cream': 3,
  'apple': 3,
  'leaf': 5,
  'cheese': 4,
  'candy': 2,
  'cake': 2,
  'jelly': 1,
  'hamburger': 2,
  'tomato': 2,
  'pie': 2,
}

actual2 = howManyTimes(input);
// assertObjectsEqual(expected2, actual2, "Should return the object with all the fruits count");

// console.log('howManyTimes:', howManyTimes(input))

//--------------------------
////*Advanced */
//c) Finally, find the top most eaten and second most eaten food using the same data. Return an array of the food names. 
// The top most eaten food should appear first, and the second most eaten should appear second


//**** Do not hardcode the answer

function topTwoFoods(eatingHabits) {
  // define placeholder array
  // import and store the result of howManyTimes function
  // define max value, equal to the first value of foods object
  // iterate over the foods object
  // if current value is more than the max value, assign the current value to the max value
  // push the corresponding key to the result array
  // push previous element to the result array
  // return the result

  let result = [];
  let foods = howManyTimes(input);
  let maxFood = foods['banana'];
  let maxFoodValue = '';
  let secondBest = '';
  
  for (key in foods) {
    if (foods[key] > maxFood) {
      maxFoodValue = key;
      maxFood = foods[key];
    }
    if (key === maxFoodValue) {
      delete foods[key];
    }
  }

  let array = Object.values(foods);
  array.sort();
  let secondBestValue = array[array.length - 1];

  for (key in foods) {
    if (foods[key] === secondBestValue) {
      secondBestValue = key;
    }
  }

  result.push(maxFoodValue);
  result.push(secondBestValue);

  return result;
}

// Test function
function assertArraysEqual(expected, actual, testName) {
  let equalLength = expected.length === actual.length;

  let equalValue = true;
  for (let i = 0; i < expected.length; i++) {
    if (expected[i] !== actual[i]) {
      equalValue = false;
      break;
    }
  }

  if (equalLength && equalValue) {
    console.log("PASSED");
  } else {
    console.log(`FAILED ${testName}. Expected ${expected}, got ${actual}`);
  }
}

// Test cases
expected3 = ['leaf', 'cheese'];
actual3 = topTwoFoods(input);
assertArraysEqual(expected3, actual3, "Should return top 2 most eaten foods");

console.log(topTwoFoods(input)); // => ['leaf', 'cheese'];