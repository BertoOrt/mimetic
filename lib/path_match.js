module.exports = function (input, action, path) {
  var object = {};
  input.forEach(function (value) {
    var count = 0;
    var array = value.path.split('/');
    var pathArr = path.split('/');
    if (value.verb === action) {
      object.verb = value.verb;
    }
    if (array.length === pathArr.length && value.path === path) {
      if (object.path === undefined) {
        object.path = value.path;
      }
    }
    else if (array.length === pathArr.length) {
      array.forEach(function (val, ind) {
        if (val === pathArr[ind]) {
          count ++;
        }
        else if (val[0] === ":") {
          count ++;
        }
      });
      if (count === array.length) {
        object.path = value.path;
      }
    }
  });
  if (object.path !== undefined && object.verb !== undefined) {
    return object
  }
  else {
    return null;
  }
}
