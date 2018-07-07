
function testLogicalOr(val) {
  // Only change code below this line

  if (val >= 10 || val <= 20) {
    return "Outside";
  }


  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);

***********************

function testLogicalOr(val) {
  // Only change code below this line

  if (val >= 10 || val <= 20) {
    return "Outside";
  }


  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);

*************************

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);

*************************

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

  if (val < 5) {
    return "Smaller than 5";
  }

  return "Between 5 and 10";
}

// Change this value to test
testElseIf(7);

/*
Code a loop using the usual conventions and < that tests each
element of a 5-element array, answers, to see if it has the value "yes".
If so, a variable, already declared, is assigned a positive, single-digit integer.
Use a number, not the array length, to limit the number of loops.

*/
function isYes(myArray) {
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] === 'Yes') {
      console.log('Good job!');
    }
    else {
      console.log('Not found.')
    }
  }
}
isYes(['Yes', 'No', 'Maybe', 'Probably', 'Perhaps']);
