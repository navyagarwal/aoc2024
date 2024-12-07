"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('input.txt', 'utf-8');
var unsafeCount = 0;
var lines = input.split('\n');
lines.forEach(function (line) {
    var arr = line.split(' ').map(Number);
    var diff = (arr[1] - arr[0]);
    var d;
    // console.log(arr);
    for (var i = 1; i < arr.length; i++) {
        d = arr[i] - arr[i - 1];
        if (Math.abs(d) < 1 || Math.abs(d) > 3 || d * diff < 0) {
            unsafeCount++;
            // console.log("unsafe");
            break;
        }
    }
});
console.log("SAFE COUNT: ".concat(1000 - unsafeCount));
