# simple-format [![Build Status](https://travis-ci.org/bendrucker/simple-format.svg?branch=master)](https://travis-ci.org/bendrucker/simple-format)

> Simple util.format replace that handles multiple arguments


## Install

```
$ npm install --save simple-format
```


## Usage

```js
var format = require('simple-format')
format('unicorns', '&', 'rainbows')
//=> unicorns & rainbows
format('%s & %s', 'unicorns', 'rainbows')
//=> unicorns & rainbows
```

## API

#### `format(messages...)` -> `string`

##### messages

Type: `string` (variadic)

Strings to format. Operates like [`util.format`](https://nodejs.org/api/util.html#util_util_format_format) which powers `console.log` in Node. If the first message has replacement tokens (e.g. *%s*), later arguments will be used as replacements. Otherwise, all arguments will be joined with a space.


## License

MIT © [Ben Drucker](http://bendrucker.me)
