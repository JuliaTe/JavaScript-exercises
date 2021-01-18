var stringifyJSON = function(obj) {
  var stringDelimiter = "'";
  var commaDelimiter = ',';
  var mapKeyValueDelimiter = ':';
  var typeValueWrapper = function(value) {
    //Wrapped Value should alsways be a string
    var wrappedValue = value;
    if (typeof(value) === 'string') {
      wrappedValue = stringDelimiter + wrappedValue + stringDelimiter;
    } else if (typeof(value) === 'number') {
      wrappedValue = value.toString();
    } else if (typeof(value) === 'boolean') {
      wrappedValue = value.toString();
    } 
    
    if (typeof(value) === 'object') {
      if (Array.isArray(value) === true) {
        wrappedValue = '[';
        for (var i = 0; i < value.length; i++ ) {
          wrappedValue += typeValueWrapper(value[i]);
          wrappedValue += commaDelimiter;
        }
        console.log(wrappedValue.length);

        wrappedValue += ']';
      } else {
        var keySet = Object.keys(wrappedValue);
        console.log(keySet);
        wrappedValue = '{';
        for (var i = 0; i < keySet.length; i++) {
          var key = keySet[i];
          
          wrappedValue += stringDelimiter + key + stringDelimiter + mapKeyValueDelimiter;
          wrappedValue += typeValueWrapper(value[key]);
          wrappedValue += commaDelimiter;

        }
  
        wrappedValue += '}';
        
      }
    }

    return wrappedValue;
  };

  return typeValueWrapper(obj);
};