/*
Filename: main.js

Description: A function in Javascript that returns true if a given number is
even, false otherwise.

Solution to the exercise 'Recursion' from chapter 3 of Eloquent Javascript
*/

function isEven(n) {
    if (n < 1) {
        n *= -1;
    }

    if (n === 0) {
        return true;
    }
    else if (n === 1) {
        return false;
    }
    else {
        return isEven(n - 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

