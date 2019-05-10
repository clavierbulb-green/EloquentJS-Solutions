/*
Filename: main.js

Description: Two functions in Javascript: the first  - countChar() -  which 
returns the number of times a given character appears in a given string; 
the second function - countBs - uses countChar() to return the number of times
the character 'B' appears in a given string.

Solution to the exercise 'Bean Counting' from chapter 3 of Eloquent Javascript
*/

function countBs(str) {
    return countChar(str, 'B');
}

function countChar(str, char) {
    let numChars = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            numChars++;
        }
    }
    return numChars;
}

console.log(countBs("BBSC"));
console.log(countChar("kakkerlak", "k"));

