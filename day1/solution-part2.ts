import * as fs from 'fs';

const data = fs.readFileSync('input.txt', 'utf-8');

const lines = data.trim().split('\n');
const array1: number[] = [];
const freqArray2 = new Map<number, number>();


lines.forEach((line) => {
    const [num1, num2] = line.split('   ').map(Number);
    array1.push(num1);
    freqArray2.set(num2, (freqArray2.get(num2) || 0) + 1);
})

let result: number = 0;

// console.log(array1);
// console.log(freqArray2);

array1.forEach((num) => {
    result += num*(freqArray2.get(num) || 0);
})

console.log(`RESULT: ${result}`);