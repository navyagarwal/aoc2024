"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('input.txt', 'utf-8');
var lines = data.trim().split('\n');
var array1 = [];
var freqArray2 = new Map();
lines.forEach(function (line) {
    var _a = line.split('   ').map(Number), num1 = _a[0], num2 = _a[1];
    array1.push(num1);
    freqArray2.set(num2, (freqArray2.get(num2) || 0) + 1);
});
var result = 0;
// console.log(array1);
// console.log(freqArray2);
array1.forEach(function (num) {
    result += num * (freqArray2.get(num) || 0);
});
console.log("RESULT: ".concat(result));
