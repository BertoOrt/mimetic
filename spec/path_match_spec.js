var pathMatch = require('../lib/path_match');

describe('pathMatch', function () {

  it('returns the object that matches the inputs exactly', function () {
    //setup - define inputs

    var routeDefinitions = [
      {verb: 'get', path: '/about'},
    ];

    // excecution - call your function

    var actual = pathMatch(routeDefinitions, 'get', '/about')

    // - check the result against an expected result
    expect(actual).toEqual({verb: 'get', path: '/about'})
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

  it('returns matching in routeDefinitions and null if no match', function () {
    //setup - define inputs

    var routeDefinitions = [
      { verb: 'get', path: '/about' },
      { verb: 'get', path: '/' },
      { verb: 'post', path: '/' },
      { verb: 'get', path: '/contact' },
    ];

    // excecution - call your function

    var actual = pathMatch(routeDefinitions, 'get', '/')
    var actual1 = pathMatch(routeDefinitions, 'get', '/contact')
    var actual2 = pathMatch(routeDefinitions, 'get', '/foo')

    // - check the result against an expected result
    expect(actual).toEqual({ verb: 'get', path: '/' });
    expect(actual1).toEqual({ verb: 'get', path: '/contact' });
    expect(actual2).toEqual(null);

  });

  it('returns matching in routeDefinitions dealing with params', function () {
    //setup - define inputs

    var routeDefinitions = [
      { verb: 'get', path: '/artists/:artist_name/albums' },
      { verb: 'get', path: '/artists/:artist_name/albums/:album_id' },
      { verb: 'get', path: '/:name' },
    ]

    // excecution - call your function

    var actual = pathMatch(routeDefinitions, 'get', '/world')

    // - check the result against an expected result
    expect(actual).toEqual({ verb: 'get', path: '/:name' });

  });

  it('returns matching in routeDefinitions dealing with params', function () {
    //setup - define inputs

    var routeDefinitions = [
      { verb: 'get', path: '/artists/:artist_name/albums' },
      { verb: 'get', path: '/artists/:artist_name/albums/:album_id' },
      { verb: 'get', path: '/:name' },
    ]

    // excecution - call your function

    var actual = pathMatch(routeDefinitions, 'get', '/hello');
    var actual1 = pathMatch(routeDefinitions, 'get', '/artists/beatles/albums');
    var actual2 = pathMatch(routeDefinitions, 'get', '/artists/alice-in-chains/albums');
    var actual3 = pathMatch(routeDefinitions, 'get', '/artists/foo-fighters/albums/234');

    // - check the result against an expected result
    expect(actual).toEqual({ verb: 'get', path: '/:name' });
    expect(actual1).toEqual({ verb: 'get', path: '/artists/:artist_name/albums' });
    expect(actual2).toEqual({ verb: 'get', path: '/artists/:artist_name/albums' });
    expect(actual3).toEqual({ verb: 'get', path: '/artists/:artist_name/albums/:album_id' });

  });

  it('returns the first match in routeDefinitions', function () {
    //setup - define inputs

    var routeDefinitions = [
      { verb: 'get', path: '/:id' },
      { verb: 'get', path: '/new' },
    ]

    // excecution - call your function

    var actual = pathMatch(routeDefinitions, 'get', '/new');

    // - check the result against an expected result
    expect(actual).toEqual({ verb: 'get', path: '/:id' });

  });

})
