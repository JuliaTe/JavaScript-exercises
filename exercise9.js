function renderInventory(inventory) {
  let flatList = ""

  // Iterate through the inventory
  for (let i = 0; i < inventory.length; i++) {
    let designerObject = inventory[i]
    let shoesArray = designerObject.shoes
    for (let j = 0; j < shoesArray.length; j++) {
      let shoe = shoesArray[j]
      flatList += designerObject.name + ', ' + shoe.name + ', ' + shoe.price + '\n'
    }
  }

  return flatList
}

function assertEqual(expected, actual, testName) {
  if (expected == actual) {
    console.log('passed')
  } else {
    console.log(`FAILED [${testName}] Expected ${expected}, got ${actual}`)
  }
}

// TEST CASES
let expectedFlatList = "Brunello Cucinelli, tasselled black low-top lace-up, 1000\nBrunello Cucinelli, tasselled green low-top lace-up, 1000\nGucci, red leather laced sneakers, 800\nGucci, black leather laced sneakers, 900"
var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1000}
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
let actualResult = renderInventory(currentInventory)
assertEqual(expectedFlatList, actualResult, 'Should render text correctly')
