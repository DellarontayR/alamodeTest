# print-value [![Build Status](https://travis-ci.org/bendrucker/print-value.svg?branch=master)](https://travis-ci.org/bendrucker/print-value)

> Generate a printable representation of a JS value


## Install

```
$ npm install --save print-value
```


## Usage

```js
var print = require('print-value')

print('string')
//=> string

print({foo: 'bar'})
//=> {"foo":"bar"}
```

## API

#### `print(value)` -> `string`

##### value

*Required*  
Type: `any`

Any value to return in printable form. Objects and arrays are stringified using `JSON.stringify`, while other values are coerced to strings.


## License

MIT © [Ben Drucker](http://bendrucker.me)
