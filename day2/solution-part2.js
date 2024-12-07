"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('input.txt', 'utf-8');
var safeCount = 0;
var lines = input.split('\n');
function checkArr(arr) {
    var diff = (arr[1] - arr[0]);
    var d;
    for (var i = 1; i < arr.length; i++) {
        d = arr[i] - arr[i - 1];
        if (Math.abs(d) < 1 || Math.abs(d) > 3 || d * diff < 0) {
            return false;
        }
    }
    return true;
}
lines.forEach(function (line) {
    var arr = line.split(' ').map(Number);
    if (!checkArr(arr)) {
        var _loop_1 = function (i) {
            var modArr = arr.filter(function (_, index) { return index != i; });
            if (checkArr(modArr)) {
                safeCount++;
                return "break";
            }
        };
        for (var i = 0; i < arr.length; i++) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
    }
    else {
        safeCount++;
    }
});
console.log("SAFE COUNT: ".concat(safeCount));
