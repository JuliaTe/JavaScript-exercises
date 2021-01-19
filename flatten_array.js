// First approach
// function flattenArray(input) {
//   var result = [];
  
//   var innerFunction = function(array) {
//     if (!Array.isArray(array)) {
//       result.push(array);
//       return;
//     }

//     array.forEach(function(item) {
//       innerFunction(item);
//     })
//   };

//   innerFunction(input);

//   return result;
// };

// Second approach
var flattenArray = function(input) {
  var result = [];

  if (!Array.isArray(input)) {
    return input;
  }

  input.forEach(function(item) {
    result = result.concat(flattenArray(item));
  })
  return result;
};

flattenArray(4); // [4]
flattenArray([4]); // [4]
 // [1, 2, 3, 4, 5]
flattenArray([1, 2, [3, [[4]]], 5]);
console.log(flattenArray([[[4]]])); // [4]
