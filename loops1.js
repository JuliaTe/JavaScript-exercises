/*
var myPlaces = ['Bali', 'Maldives', 'Havana'];
var friendPlaces = ['Brasil', 'Mexico', 'Havana'];

for (var i = 0; i < myPlaces.length; i++) {
//  console.log(myPlaces[i]);
    for (var j = 0; j < friendPlaces.length; j++) {
    //  console.log(friendPlaces[j]);

      if (myPlaces[i] === friendPlaces[j]) {
        console.log(myPlaces[i]);
      }
  }
}



var myPlaces = ['Paris', 'New York', 'Barcelona'];
var friendPlaces = ['Rome', 'Chicago', 'Paris'];

for (var i = 0; i < myPlaces.length; i++) {
    console.log(myPlaces[i]);

  for (var j = 0; j < friendPlaces.length; j++) {
        console.log(friendPlaces[j]);

    //if (myPlaces[i] === friendPlaces[j]) {
    			//console.log('Match: ' + myPlaces[i]);
			//	}
    }
}

var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
var currentCard = 'Heart';
while (currentCard !== 'Spade') {
  console.log(currentCard);

  var randomNumber = Math.floor(Math.random() * 4);

  currentCard = cards[randomNumber];
}

console.log('You found the Spade!')


for (var i = 5; i <= 50; i+=5) {
	console.log(i);
}



var myArr = [ 2, 3, 4, 5, 6];

var total = 0;
for (var i = 0; i < myArr.length; i ++) {
  total = total + myArr[i];
}

console.log(total);




var arr = [[1,2], [3,4], [5,6]];
for (var i=0; i<arr.length;i++) {
  var arr2 = arr[i];
  for (var j=0; j<arr2.length; j++){
     console.log(arr2[j]);
   }
}



var arr = [
[1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
for (var j=0; j < arr[i].length; j++) {
console.log(arr[i][j]);
}
}
*********

function displayOneLevelArray(arr) {
for (var i=0; i < arr.length; i++) {
console.log(arr[i]);
}
console.log("End of array");
}

console.log("Display one lvl array");
var arr = [1, 2, 3, 4];
displayOneLevelArray(arr);


console.log("Display multi-dimensional array:");
var arr2 = [[1,2], [3,4], [5,6,7,8,9]];

for (var i=0; i<arr2.length; i++) {
displayOneLevelArray(arr2[i]);
}
console.log("End of programm");

*/


function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
    }
    product = product * arr[j];

  }



  return product;
}

// Modify values below to test your code
console.log(multiplyAll([[1,2], [3,4], [5,6]]));
