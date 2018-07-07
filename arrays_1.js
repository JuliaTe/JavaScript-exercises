/*
function cloneArray(arr) {
  var myArray = arr;
  var newArray = arr.slice(0);
  newArray.push('abc');
  console.log( newArray );

}

cloneArray( [1,2,3] );
******************************
*/


var arr = ['Olivia', 'Daniel', 'Tristan', 'Julia'];

function spliceArray(arr) {
  arr.splice(1, 2, 'Silvia', "Alice");
  console.log(arr);

}

spliceArray(arr);

/*
******************************

var mySiblings = ['Julia', 'Dima', 'Karol', 'Katena'];
var adults = ['Olya', 'Andrey'];
adults[0] = 'Olga';
var myFamily = mySiblings.concat(adults);
myFamily.push('Lora');
myFamily.reverse();
console.log(myFamily);
console.log( adults[1] );
*/
