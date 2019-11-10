/*
A function that returns the minimum of two arguments.

Written as a solution to ex.3.1:'Minimum' from Eloquent Javascript.
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
