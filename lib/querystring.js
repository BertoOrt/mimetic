module.exports = function (input) {
    var object = {};
    if (input !== null) {
    var object = {};
    var query = input.replace("?", "");
    var splitQuery = query.split("&");
    splitQuery.map(function(value){
      var string = value.split("=");
      var key = string[0];
      var val = string[1];
      if (key[key.length-1] === "]" && key[key.length - 2] === "[") {
        var nkey = key.replace("[]", "");
        object[nkey] = object[nkey] || [];
        object[nkey].push(val);
      }
      else {
        object[key] = val;
      }
    });
    };
    return object;
  };
