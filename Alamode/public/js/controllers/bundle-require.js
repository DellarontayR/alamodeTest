var Tiff = require('./tiff.js');
Tiff.initialize({TOTAL_MEMORY: 300000000});
var fs = require('fs');
var dcraw = require('dcraw');
var UTIF = require('UTIF');
var newTiff = require('Tiff');
var streamBuffers = require('stream-buffers');


exports.export = {Tiff:Tiff,fs:fs,dcraw:dcraw,UTIF:UTIF,newTiff:newTiff,streamBuffers:streamBuffers};