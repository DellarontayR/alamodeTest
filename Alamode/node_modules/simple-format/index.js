'use strict'

var printf = require('pff')
var toArray = require('to-array')
var regex = /%[sdj]/

module.exports = function format (message) {
  if (regex.test(message)) return printf.apply(null, arguments)
  return toArray(arguments).join(' ')
}
