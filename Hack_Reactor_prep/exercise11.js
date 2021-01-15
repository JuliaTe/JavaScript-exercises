function listAllBlackShoes(inventory) {
  let flatList = '';

  //iterate over inventory array
  for (let i = 0; i < inventory.length; i++) {
    let designerObject = inventory[i];
    //derive a designer name, store it
    let designerName = designerObject.name;
    let designerShoes = designerObject.shoes;
    //iterate over shoes array
    //when found the word "black", add to flatList
    for (let j = 0; j < designerShoes.length; j++) {
      let individualShoe = designerShoes[j];
      if (shoeIsBlack(individualShoe)) {
        flatList += `${designerName}, ${individualShoe.name}, ${individualShoe.price}\n`
      }
    }
  }
  console.log(flatList);
  return flatList;
}

function shoeIsBlack(individualShoe) {
  if (individualShoe.name.indexOf('black') !== -1) {
    return true;
  } else {
    return false;
  }
}

//Test function
function assertEqual(expected, actual, testName) {
  if (expected === actual) {
    cosnoel.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected \n${expected}, \n got \n${actual}`);
  }
}


//TEST CASES
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

listAllBlackShoes(input);

let expected_output = 'Brunello Cucinelli, tasselled black low-top lace-up, 1000\nGucci, black leather laced sneakers, 900'
let actual_result = listAllBlackShoes(input);

assertEqual(expected_output, actual_result, 'Should display black shoes');