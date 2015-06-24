var pathMatch = require('../lib/path_match');

describe('pathMatch', function () {

  it('returns the object that matches the inputs exactly', function () {
    //setup - define inputs

    var routeDefinitions = [
      {verb: 'get', path: '/me'},
    ];

    // excecution - call your function

    var actual = pathMatch(routeDefinitions, 'get', '/me')

    // - check the result against an expected result
    expect(actual).toEqual({verb: 'get', path: '/me'})
  });

  it('returns null if the verb does not match any in routeDefinitions', function () {
    //setup - define inputs

    var routeDefinitions = [
      {verb: 'get', path: '/me'},
    ];

    // excecution - call your function

    var actual = pathMatch(routeDefinitions, 'post', '/me')

    // - check the result against an expected result
    expect(actual).toEqual(null)
  });

})
