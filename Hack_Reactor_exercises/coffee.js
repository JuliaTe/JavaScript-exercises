var coffeeRegions = [
  {
    country: 'Brazil',
    regions: [
      {
        region:'Bahia', 
        containers: 2,
        "price per container": 1200
      },
      {
        region:'São Paulo', 
        containers: 1,
        "price per container": 1350,
      },
    ],
  },
   {
    country: 'Ethiopia',
    regions: [
      {
        region:'Yirgacheffe', 
        containers: 4,
        "price per container": 1300,
      },
      {
        region:'Sidamo', 
        containers: 2,
        "price per container": 1250,
      },
    ],
  },
  {
    country: 'Indonesia',
    regions: [
      {
        region:'Sumatra', 
        containers: 5,
        "price per container": 1100,
      },
    ]
  }  
]

//ii: How any countries are listed?
  //B.1 => how would you access different country names?

//   console.log(coffeeRegions[0]['country']); //=>  'Brazil'
//   console.log(coffeeRegions[2]['country']); //==> 'Indonesia'

// //iii Access regions:
//   //How would you access different the values at the region properties?

//   console.log(coffeeRegions[1]['regions'][1]['region']); // => 'Sidamo'
//   console.log(coffeeRegions[2]['regions'][0]['region']); //=> 'Sumatra'

//-------------------------------------

//B countries and regions
//**use the data from problem 1
//Prompt:
  //Return an array of the countries and regions count. 
  // The first element of the array should be the amount of countries bought from. 
  // The second element should be the total regions bought from

  function totalCountriesAndRegions(arr) {
    // define placeholder result array
    // coffeeRegions length is the amount of countrues => store into result array
    // define regions counter
    // iterate through the coffeeRegions
    // when encountering region, incremenent the count
    // push count into result array
    // return result array

    let result = []
    let numberOfCountries = coffeeRegions.length;
    result.push(numberOfCountries);
    let regionsCounter = 0;
    for (let i = 0; i < arr.length; i++) {
      let country = arr[i];
      let numberOfRegions = country['regions'].length;
      regionsCounter += numberOfRegions;
    }

    result.push(regionsCounter);
    return result;
  }

// Test function
// function assertArrayEqual(expected, actual, testName) {
//   let equalLength = expected.length === actual.length;

//   let equalValue = true;
//   for (let i = 0; i < expected.length; i++) {
//     if (expected[i] !== actual[i]) {
//       equalValue = false;
//       break;
//     }
//   }

//   if (equalLength && equalValue) {
//     console.log('PASSED');
//   } else {
//     `FAILED ${testName}. Expected ${expected}, got ${actual}`;
//   }
// }

// Test cases
// let actual1 = totalCountriesAndRegions(coffeeRegions);
// console.log('totalCountriesAndRegions', actual1) //==> [3, 5];

// let expected1 = [3, 5];
// assertArrayEqual(expected1, actual1, "Should return correct count");

//-------------------------------------

//C total spent
  //**continue to use the data from problem 1
  //Write a funtion 'total spent' that calculates the total spent for all coffee. 
  //**the amount of containers purchases is the value of the 'containers' property

  function totalSpent(arr) {
    // define placeholder result
    // iterate through input array
    // add all values per region to result
    // return result
    
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
      let country = arr[i];
      let countryTotal = 0;
      // console.log("region: ", country['regions'][0]['containers']);
      // console.log("arrayLength: ", country['regions'].length);

      for (let j = 0; j < country['regions'].length; j++) {
        let region = country['regions'][j];
        regionTotal = region['containers'] * region['price per container'];
        countryTotal += regionTotal;
        // console.log(countryTotal, regionTotal);
      }
      result += countryTotal;
    }
    return result;
  }

  // Test function
  function assertEqual(expected, actual, testName) {
    if (expected === actual) {
      console.log('PASSED');
    } else {
      `FAILED ${testName}. Expected ${expected}, got ${actual}`;
    }
  }

  // Test cases
  // var actual2 = totalSpent(coffeeRegions);
  // console.log('totalSpent:', actual2); // =>16950
  // let expected2 = 16950;
  // assertEqual(expected2, actual2, "Should calculate total spent correctly");

  //-------------------------------------

  //D- average, highest, and lowest
    //Return an object of the cheapest region, most expensive region, and average cost of coffee

function coffeePrices (arr) {
  // define placeholder object
  // define max and min equal
  // iterate over the arr
  // compare current value of region price per container with min and max
  // if it's less than min, update min with the current value
  // if it's more than max, update max with teh current value
  // insert min and max values into placeholder object
  // return result object

  let result = {
    'cheapest region': '', 
    'most expensive region': '', 
    'average': 0
  }
  // let min = result['cheapest region'];
  // let max = result['most expensive region'];

  let min = arr[0]['regions'][0]['price per container'];
  let max = arr[0]['regions'][0]['price per container'];
  let totalPrice = 0;
  let regionsCounter = 0;

  console.log('Yo ', min, max);
  for (let i = 0; i < arr.length; i++) {
    let country = arr[i];
    console.log('Min max: ', min, max);
    
    for (let j = 0; j < country['regions'].length; j++) {
      let region = country['regions'][j];
      totalPrice += region["price per container"];
      regionsCounter += 1;
      console.log(totalPrice, regionsCounter);
      if (region['price per container'] < min) {
        min = region['price per container'];
        result['cheapest region'] = region['region'];
      }
      if (region['price per container'] > max) {
        max = region['price per container'];
        result['most expensive region'] = region['region'];
      }
    }
    
    result['average'] = totalPrice / regionsCounter;
  }

  return result;
}

// Test function
function assertObjectsEqual(expected, actual, testName) {
  expected = JSON.stringify(expected);
  actual = JSON.stringify(actual);

  if (expected === actual) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}.\n Expected ${expected},\n got ${actual}`);
  }
}

// Test cases
expected3 = {
  'cheapest region': 'Sumatra', 
  'most expensive region': 'São Paulo', 
  'average': 1240
}

actual3 = coffeePrices(coffeeRegions);
console.log('coffeePrices:', actual3);
assertObjectsEqual(expected3, actual3, "Should return correct values");
