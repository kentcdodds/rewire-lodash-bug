# rewire-lodash-bug

[![Build Status][build-badge]][build]

This is an example of the issue with combining the [lodash](http://npm.im/babel-plugin-lodash) and
[rewire](http://npm.im/babel-plugin-rewire) babel plugins.

## Steps

1. Clone the repo
2. Run `npm install` (npm v3 recommended)
3. Run `npm run test` (You'll notice that you get: `ReferenceError: _ is not defined`)
4. Now run `npm run build`

This will generate the `dist` directory that shows the output for all different combinations.

If you look at the `both.js` you'll notice that `rewire` defines a `_get_original__` function which attempts to
`return _` but if you look throughout the file, that variable doesn't exist. Looking at the `lodash.js` you'll find that
this is because `lodash` removes that variable and replaces it with `_get2`. But `rewire` is unaware of this change so
this results in getting `_ is not defined` error.

I'm not certain of the solution to this problem. But I'd really like to be able to use both of these solutions!

## Helping

This project is set up with tests for all combinations as well. If we could get these tests to all pass that be great
(currently, the only test script that's not passing is `npm run test:both`).

This project also has a [travis build](https://travis-ci.org/kentcdodds/rewire-lodash-bug), so you can file a pull
request and we'll be able to see if the bug is fixed. Thanks!

[build-badge]: https://img.shields.io/travis/kentcdodds/rewire-lodash-bug.svg?style=flat-square
[build]: https://travis-ci.org/kentcdodds/rewire-lodash-bug
