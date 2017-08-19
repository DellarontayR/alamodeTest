'use strict'

var assert = require('assert-ok')
var format = require('simple-format')
var print = require('print-value')

module.exports = function assertEqual (a, b) {
  assert(a === b, format('expected `%s` to equal `%s`', print(a), print(b)))
}
