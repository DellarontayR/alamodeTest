# assert-equal [![Build Status](https://travis-ci.org/bendrucker/assert-equal.svg?branch=master)](https://travis-ci.org/bendrucker/assert-equal)

> Assert that two values are equal


## Install

```
$ npm install --save assert-equal
```


## Usage

```js
var assertEqual = require('assert-equal')

assertEqual(1, 1)
//=> (noop)

assertEqual(1, 2)
//=> throw new Error('expected `1` to equal `2`')
```

## License

MIT © [Ben Drucker](http://bendrucker.me)
