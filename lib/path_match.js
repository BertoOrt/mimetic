module.exports = function (input, action, path) {
  if (input[0].verb !== action) {
    return null
  }
  return {verb: action, path: path}
}
