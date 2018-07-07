function newSum (start, end) {
  var sum = 0;

  if (start < end) {
    for (let i = start; i <= end; i++) {
      sum += i;
    }
    return sum;
  }
  for (let i = end; i <= start; i++) {
    sum += i;
  }

  return sum;
}

console.log(newSum(6, 3));



//2, 3, 4, 5
*******
function sum (start, end) {
  return start < end ?  calculateRange(start, end) : calculateRange(end, start);
}

function calculateRange(start, end) {
  var sum = 0;
  for (let i = start; i <= end; i ++) {
    sum += i;

  }
  return sum;
}


************
function newSum (start, end) {
  if (end < start) {
    return newSum(end, start);
  }

  var sum = 0;
  for (let i = start; i <= end; i ++) {
    sum += i;

  }
  return sum;
}


*********

function sum(start, end) {
    var sum = 0;
    for (let i = Math.min(start, end); i < Math.max(start, end); i++) {
        sum += i;
    }

    return sum;
}

******

function sum (start, end) {
  if (start < end) {
    return calculateRange(start, end);
  }

  return calculateRange(end, start);
}

function calculateRange(start, end) {
  var sum = 0;
  for (let i = start; i <= end; i ++) {
    sum += i;

  }
  return sum;
}
