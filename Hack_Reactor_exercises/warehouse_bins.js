function warehouseBins(items, bins) {
  // iterate through the items array of objects
  // if a current iteam is in the bins objects, push the current item into bins
  // return bins object
  for (let i = 0; i < items.length; i++) {
    let currentItem = items[i];
    console.log(currentItem['type']);
    if (currentItem['type'] in bins) {
      bins[currentItem['type']].push(currentItem['item']);
    }
  }

  return bins;

}

// Test function
function assertObjectsEqual(expected, actual, testName) {
  expected = JSON.stringify(expected);
  actual = JSON.stringify(actual);

  if (expected === actual) {
    console.log('PASSED');
  } else {
    console.log(`FAILED ${testName}. Expected ${expected}, got ${actual}`);
  }
}

// Test cases
let input1 = [
  {item: 'desk', type: 'homegoods'},
  {item: 'lamp', type: 'homegoods'},
  {item: 'laptop', type: 'electronics'},
  {item: 'moisturizer', type: 'skincare'},
  {item: 'towel', type: 'homegoods'},
  {item: 'mouse', type: 'electronics'},
  {item: 'sunscreen', type: 'skincare'},
  {item: 'bed frame', type: 'homegoods'}
];

let binNames = {
  homegoods: [],
  electronics: [],
  skincare: [],
};

let expected1 = {
  homegoods: ['desk', 'lamp', 'towel', 'bed frame'],
  electronics: ['laptop', 'mouse'],
  skincare: ['moisturizer', 'sunscreen'],
};

let actual1 = warehouseBins(input1, binNames);
assertObjectsEqual(expected1, actual1, 'Should place items into the correct bins');
console.log(actual1);