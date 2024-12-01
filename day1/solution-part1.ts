import * as fs from 'fs';

const data = fs.readFileSync('input.txt', 'utf-8');

const lines = data.trim().split('\n');
const array1: number[] = [];
const array2: number[] = [];

let result: number = 0;

lines.forEach((line) => {
    const[num1, num2] = line.split('   ').map(Number);
    array1.push(num1);
    array2.push(num2);
})

array1.sort((a, b) => a-b);
array2.sort((a, b) => a-b);

console.log(array1);
console.log(array2);

for(let i = 0; i < array1.length; i++) {
    result += Math.abs(array1[i] - array2[i]);
}


console.log(`RESULT: ${result}`);