function flattenArray(input) {
  var result = [];
  
  var innerFunction = function(array) {
    if (!Array.isArray(array)) {
      result.push(array);
      return;
    }

    array.forEach(function(item) {
      innerFunction(item);
    })
  };

  innerFunction(input);

  return result;
};

// flattenArray(4); // [4]
// flattenArray([4]); // [4]
 // [1, 2, 3, 4, 5]
console.log(flattenArray([1, 2, [3, [[4]]], 5]));
// flattenArray([[[4]]]); // [4]
