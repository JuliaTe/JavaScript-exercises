/*
Live coding exercise:

    Create two 2-element arrays.
    Create an empty array to accumulate concatenations. Create a counter for this array.
    Code nested loops that concatenate all the combinations of the array elements.
    After the loops have run, create an alert that displays the first combination.
    Click the Run It button to run your code live. (Only one alert should display.)
*/

var color = ['green', 'purple'];
var clothes = ['skirt', 'shirt'];
var look = [];
var k = 0;

for (var i = 0; i < color.length; i++) {
  for (var j = 0; j< color.length; j++) {
    look[k] = color[i] + clothes[j];
    k++
  }
}

console.log(look[0]);
