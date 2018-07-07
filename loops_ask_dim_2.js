/*
Here are 4 lines of code.
Continue the code to create nested loops. The inner loop concatenates
each of the elements of animals with each of the elements of products, with
no space separating them. Accumulate the combinations in foodItems.
The counter for foodItems is k. Limit the number of loops by the length of each array.

var animals = ["goat", "cat", "crow"];
var products = ["milk", "cheese", "burger"];
var foodItems = [];
var k = 0;

for (var i = 0; i < animals.length; i++) {
    for (k = 0; k < animals.length; k++) {
      foodItems = animals[i] + products[k];
      console.log(foodItems);
    }
}


Dim help!!!!
In the example below why if we comment out 'k', the result array displays second values of both arrays.
*/

var fruits = ["lemon ", "orange "];
var variations = ["juice", "curd"];
var products = [];
var h = 0;
for (var i = 0; i < fruits.length; i++) {
  for (var j = 0; j < variations.length; j++) {
    products[h] = fruits[i] + variations[j];
    //h++;
  }
}
console.log(products);
