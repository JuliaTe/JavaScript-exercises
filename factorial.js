function calcFactorial (n) {
  var factorial = true;
  if (n === 0 || n === 1) {
    return 1;
  }
  else {

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
}
  return factorial;
}

console.log(calcFactorial(0));


#2 with while loop:


function calcFactorial (n) {
  var factorial = 1;
  while (n > 0) {
    factorial *= n;
    n--;
  }
  return factorial;
}

console.log(calcFactorial(5));
