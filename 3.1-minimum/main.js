/*
Filename: main.js

Description: A function in Javascript that returns the minimum of two
arguments.

Solution to the exercise 'Minimum' from chapter 3 of 
Eloquent Javascript
*/

function min(arg1, arg2) {
    if (arg1 < arg2) {
        return arg1;
    }
    else {
        return arg2;
    }
}

console.log(min(0, 10));
console.log(min(0, -10));
