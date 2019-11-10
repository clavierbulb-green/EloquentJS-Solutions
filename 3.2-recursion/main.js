/*
A function that returns true if a given number is even, false otherwise.

Written as a soluion to the ex.3.2:'Recursion' from Eloquent Javascript.
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

