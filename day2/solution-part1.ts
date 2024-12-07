import * as fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8');

let unsafeCount: number = 0;

const lines = input.split('\n');

lines.forEach((line) => {
    const arr: number[] = line.split(' ').map(Number);
    const diff = (arr[1] - arr[0]);
    let d: number;
    // console.log(arr);
    for(let i = 1; i < arr.length; i++){
        d = arr[i] - arr[i-1];
        if(Math.abs(d) < 1 || Math.abs(d) > 3 || d*diff < 0){
            unsafeCount++;
            // console.log("unsafe");
            break;
        }
    }
})

console.log(`SAFE COUNT: ${1000 - unsafeCount}`);