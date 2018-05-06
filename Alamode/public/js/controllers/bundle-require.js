var Tiff = require('./tiff.js');
Tiff.initialize({TOTAL_MEMORY: 500000000});
var fs = require('fs');
var dcraw = require('dcraw');


exports.Tiff = {Tiff:Tiff,fs:fs,dcraw:dcraw};