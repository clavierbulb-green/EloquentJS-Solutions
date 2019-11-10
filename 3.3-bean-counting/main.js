/*
Two functions:
countChar() -  returns the number of times a given character appears in 
a given string; 

countBs() - returns the number of times the character 'B' appears in a 
given string.

Written as a solution to ex.3.3:'Bean Counting' from Eloquent Javascript.
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

