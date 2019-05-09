/*
Filename: main.js

Description: A Javascript program that uses console.log to print an 8 by 8
chessboard. 

Solution to the exercise 'Chessboard' from chapter 2 of Eloquent Javscript
*/

const SIZE_DEF = 8;
const CHAR_DEF = '#';

let size = Number(prompt('Enter size of chessboard (default 8):'));
size = size || SIZE_DEF;

let blackSquare= prompt('Enter a character for the black squares (default #):');
blackSquare = blackSquare || CHAR_DEF;

for (let row = 0; row < size; row++ ) {
    let string = "";
    for (let col = 0; col < size; col++ ) {
        if (row % 2 === 0) {
            if (col % 2 === 0) {
               string += ' '; 
            }
            else {
                string += blackSquare; 
            }
        }
        else {
            if (col % 2 === 0) {
                string += blackSquare;
            }
            else {
                string += ' ';
            }
        }
    }
    console.log(string);
}
