once = function(func) {

  var alreadyCalled = false;
  var result;

  return function() {
    if (!alreadyCalled) {

      result = func.apply(this, arguments);
      alreadyCalled = true;
    }
    // The new function always returns the originally computed result.
    return result;
  };
};

it('should apply arguments to the user-defined function', function() {
    var add = _.once(function(x, y, z) {
        return x + y + z;
      });
    
      expect(add(1, 2, 3)).to.equal(6);
    });
    
    
    var onceF = once(myF);
    console.log(onceF(1, 2, 3));
    console.log(onceF(9, 9, 9));

    
    var myF = function(x, y, z) {
      return x + y + z;
    };