const tax = .06

function checkout(cart) {
  // define result
  // loop through the array of objects
  // multiply qty by prc
  // apply tax when taxable
  // add to result

  let result = 0;

  for (let i = 0; i < cart.length; i++) {
    let eachItem = cart[i];
    let sum = 0;
    if (eachItem['taxable'] === false) {
      sum = eachItem['prc'] * eachItem['qty'];
      result += sum;
    } else {
      sum = eachItem['prc'] * eachItem['qty'] * (1 + tax);
      result += sum;
    }
  }

  return result;
}

// Test function
function assertEqual(expected, actual, testName) {
  if (expected === actual) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}. Expcted ${expected}, got ${actual}`);
  }
}

// Test cases
let input = ([
  { desc: "potato chips", prc: 2, qty: 2, taxable: false },
  { desc: "soda", prc: 3, qty: 2, taxable: false },
  { desc: "paper plates", prc: 5, qty: 1, taxable: true }
]);

let expectedResult = 15.3;
let actualResult = checkout(input);
assertEqual(expectedResult, actualResult, 'Should calculate total correctly');
