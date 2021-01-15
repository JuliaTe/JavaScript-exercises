function replaceChar(str, char) {
  var res = str.split('');
  console.log(res[0]);
  res[0] = char;
  console.log(res);
  return res.join('');
}

var testStr = 'jellow';
var testChar = 'm';

console.log('basic3: ', replaceChar(testStr, testChar)); // ==> 'mellow'
