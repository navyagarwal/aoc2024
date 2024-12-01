"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var data = fs.readFileSync('input.txt', 'utf-8');
var lines = data.trim().split('\n');
var array1 = [];
var array2 = [];
var result = 0;
lines.forEach(function (line) {
    var _a = line.split('   ').map(Number), num1 = _a[0], num2 = _a[1];
    array1.push(num1);
    array2.push(num2);
});
array1.sort(function (a, b) { return a - b; });
array2.sort(function (a, b) { return a - b; });
console.log(array1);
console.log(array2);
for (var i = 0; i < array1.length; i++) {
    result += Math.abs(array1[i] - array2[i]);
}
console.log("RESULT: ".concat(result));
