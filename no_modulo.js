//console.log(Math.floor(2.5));

function isEven (n) {
  if (n - Math.floor(n) == 0) {
    return true;
  }
  else {
    return false;    
  }
}

console.log(isEven(7.5));
