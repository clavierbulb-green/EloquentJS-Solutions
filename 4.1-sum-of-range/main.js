/*
Filename: main.js

Description: A program that takes a user input of two numbers and a step amount
and calculates the sum of the range of the two numbers.

Solution to the exercise 'The Sum of a Range' from chapter 4 of Eloquent 
Javascript
*/

//return an array with all numbers from start to end
function range(start, end, step = 1) {
    let range = [];
    if (step === 0) {
        range.push(start);
        return range;
    }
    else if (step < 0) {
        step *= -1;
    }

    if (start <= end) {
        for (let n = start; n <= end; n += step){
           range.push(n);
        }
    }
    else {
        for (let n = start; n >= end; n -= step){
            range.push(n);
        }
    }
    return range;
}

//return sum of an array of numbers
function sum(numbers) {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum;
}

//remember to convert string returned by prompt() to a number
let userStart = Number(prompt("Enter the start of the range to sum: "));
let userEnd = Number(prompt("Enter the end (incl.) of the range to sum: "));
let userStep = Number(prompt("Enter the step value to increment by: "));

console.log("The sum of the given range: "
+ range(userStart, userEnd, userStep) + " is: "
+ sum(range(userStart, userEnd, userStep)));
/*
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
*/
