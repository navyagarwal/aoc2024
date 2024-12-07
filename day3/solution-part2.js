"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('input.txt', 'utf-8');
var splits = input.split(/(?=don't\(\))|(?=do\(\))/);
var sections = [];
splits.forEach(function (split) {
    if (!split.includes("don't()")) {
        split.split("mul(").forEach(function (s) { return sections.push(s); });
    }
});
var numbers = sections.map(function (section) {
    var index = section.indexOf(')');
    return section.substring(0, index);
});
var ans = 0;
numbers.forEach(function (num) {
    var _a;
    if (num != '') {
        var _b = [0, 0], a = _b[0], b = _b[1];
        try {
            var n = num.split(',');
            if (n.length === 2) {
                _a = n.map(Number), a = _a[0], b = _a[1];
                if (!isNaN(a) && !isNaN(b)) {
                    ans += a * b;
                }
            }
        }
        catch (_c) {
            console.log("skipping invalid!");
        }
    }
});
// console.log(splits);
// console.log(sections);
// console.log(numbers);
console.log("ANS: ".concat(ans));
