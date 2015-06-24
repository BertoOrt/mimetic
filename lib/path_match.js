module.exports = function (input, action, path) {
  var object = {};
  input.forEach(function (value) {
    if (value.verb === action) {
      object.verb = value.verb;
    }
    if (value.path === path) {
      object.path = value.path;
    }
  });
  if (object.path !== undefined && object.verb !== undefined) {
    return object
  }
  else {
    return null;
  }
}
