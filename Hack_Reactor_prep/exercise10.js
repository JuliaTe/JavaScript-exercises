function calculateAveragePricePerDesigner(inventory) {
  // create result object
  let result = {
    designers: []
  }
  // iterate through the inventory object
  for (let i = 0; i < inventory.length; i++) {
    let designerObject = inventory[i];
    // console.log('designer name', designerObject.name)
    let shoes = designerObject.shoes;
    // console.log(averagePrice(shoes))
    
  }
  // store designer name into variable
    // iterate through shoes array
    // store sum of prices



  // return result object
  return result;
}

function averagePrice(arrayOfShoeObjects) {
  let sum = 0;
  console.log(arrayOfShoeObjects.length);
  for (let j = 0; j < arrayOfShoeObjects.length; j++) {
    let currentShoe = arrayOfShoeObjects[j];
    sum += currentShoe.price;
  }
  return sum / arrayOfShoeObjects.length
}

averagePrice([
  {name: 'tasselled black low-top lace-up', price: 1000},
  {name: 'tasselled green low-top lace-up', price: 1100},
  {name: 'plain beige suede moccasin', price: 950},
  {name: 'plain olive suede moccasin', price: 1050}
])

function assertEqual(expected, actual, testName) {
  expected = JSON.stringify(expected);
  actual = JSON.stringify(actual);
  if (expected === actual) {
    cosnoel.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected {$expected}, \n got ${actual}`);
  }
}

// // TEST CASES
let input = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

let expected = {
  'designers': [
    {
      'name': 'Brunello Cucinelli',
      'averagePrice': 1025
    },
    {
      'name': 'Gucci',
      'averagePrice': 850
    }
  ]
};

let actualResult = calculateAveragePricePerDesigner(input);

assertEqual = (expected, actualResult, 'Should display the average cost per designer');

calculateAveragePricePerDesigner(input)