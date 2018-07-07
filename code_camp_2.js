/* function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}


function power_iter(base, exponent) {
  var result;
  while (exponent > 0) {
    result = result * base;
    exponent = exponent - 1;
  }
  return result;
}

console.log(power_iter(5, 6));



function numberSum(N) {
  var total = 0;
    for (var i = 1; i <= N; i++){
      total += i;
    }
    return total;
}

console.log(numberSum(5));

*/

function factorialize(N) {
  var factorial = 0;
  for (var i = N; i >= 1; i--) {
    factorial = N*factorial;
  }
  return factorial;
}

console.log(factorialize(5));

console.log("Hello");
