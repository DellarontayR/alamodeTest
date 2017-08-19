'use strict'

var isObject = require('isobject')
var safeStringify = require('json-stringify-safe')

module.exports = function print (value) {
  var toString = isJson(value) ? stringify : String
  return toString(value)
}

function isJson (value) {
  return isObject(value) || Array.isArray(value)
}

function stringify (value) {
  return safeStringify(value, null, '')
}
