import * as fs from 'fs';

const input = fs.readFileSync('input.txt', 'utf-8');

const splits = input.split(/(?=don't\(\))|(?=do\(\))/)

const sections: string[] = [];

splits.forEach((split) => {
    if(!split.includes("don't()")) {
        split.split("mul(").forEach((s) => sections.push(s));
    }
})


const numbers = sections.map((section) => {
    const index = section.indexOf(')');
    return section.substring(0, index);
})

let ans: number = 0;

numbers.forEach((num) => {
    if(num != ''){
        let [a, b] = [0, 0];
        try {
            const n = num.split(',');
            if(n.length === 2){
                [a, b] = n.map(Number);
                if(!isNaN(a) && !isNaN(b)){
                    ans += a*b;
                }
            }
        } catch {
            console.log("skipping invalid!");
        }
    }
})

// console.log(splits);

// console.log(sections);

// console.log(numbers);

console.log(`ANS: ${ans}`);