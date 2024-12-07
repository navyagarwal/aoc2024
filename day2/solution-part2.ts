import * as fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8');

let safeCount: number = 0;

const lines = input.split('\n');

function checkArr(arr: number[]) {
    const diff = (arr[1] - arr[0]);
    let d: number;
    for(let i = 1; i < arr.length; i++){
        d = arr[i] - arr[i-1];
        if(Math.abs(d) < 1 || Math.abs(d) > 3 || d*diff < 0){
            return false;
        }
    }
    return true;
}

lines.forEach((line) => {
    const arr: number[] = line.split(' ').map(Number);
    if(!checkArr(arr)) {
        for(let i = 0; i < arr.length; i++){
            let modArr = arr.filter((_, index) => index != i);
            if(checkArr(modArr)){
                safeCount++;
                break;
            }
        }
    } else {
        safeCount++;
    }
})

console.log(`SAFE COUNT: ${safeCount}`);