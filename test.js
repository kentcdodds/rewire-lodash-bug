import myGet from './'

console.assert(myGet({a: {b: 'c'}}, 'a.b') === 'c')
