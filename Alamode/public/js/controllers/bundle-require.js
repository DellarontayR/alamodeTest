var Tiff = require('./tiff.js');
Tiff.initialize({TOTAL_MEMORY: 300000000});
var fs = require('fs');
var dcraw = require('dcraw');
var UTIF = require('UTIF');

exports.Tiff = {Tiff:Tiff,fs:fs,dcraw:dcraw,UTIF:UTIF};