function calcFib (n) {
    var fib = [0, 1];
    for (var i = 2; i < n; i ++) {
      var fibNum = fib[i - 2] + fib[i - 1];
      fib.push(fibNum);


    }
    return fib;


}



console.log(calcFib(7));
