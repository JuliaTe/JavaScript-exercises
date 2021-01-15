function restOfStr(str, char) {
  var indexOf = str.indexOf(char);
  console.log(indexOf);
  var restOfStr = str.slice(indexOf);

  return restOfStr;
}

var str1 = 'hello';
var char1 = 'l';

console.log('basic2: ', restOfStr(str1, char1)); //==> 'ello' 