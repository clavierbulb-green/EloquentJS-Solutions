/*
Filename: main.js

Description: A Javascipt program that uses console.log to draw a
triangle seven lines tall and seven characters wide. 

Solution to the exercise 'Looping a Triangle' from chapter 2 of 
Eloquent Javascript
*/

for (let line = '#'; line.length <= 7; line += '#') {
    console.log(line);
}
