# rewire-lodash-bug

This is an example of the issue with combining the [lodash](http://npm.im/babel-plugin-lodash) and
[rewire](http://npm.im/babel-plugin-rewire) babel plugins.

## Steps

1. Clone the repo
2. Run `npm install` (npm v3 recommended)
3. Run `npm run all`

This will generate the `dist` directory that shows the output for all different combinations.

If you look at the `both.js` you'll notice that `rewire` defines a `_get_original__` function which attempts to
`return _` but if you look throughout the file, that variable doesn't exist. Looking at the `lodash.js` you'll find that
this is because `lodash` removes that variable and replaces it with `_get2`. But `rewire` is unaware of this change so
this results in getting `_ is not defined` error.

I'm not certain of the solution to this problem. But I'd really like to be able to use both of these solutions!
