
function nextInLine(arr, item) {

  var newItem = arr.push(item);

  var removedItem = arr.shift();



  return removedItem; // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

// In this exercise the variable is declared and then passed to the function, intestead of passing actual values.
