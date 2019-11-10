/*
A Javascript program that uses console.log to print all numbers
from 1 to 100, except if: 

1. the number is divisible by 3, in which case "Fizz" is printed; 
2. the number is divisible by 5, in which case "Buzz" is printed;
3. the number is divisible by both 3 and 5, in which case "FizzBuzz" is
printed. 

Written as a solution to the ex.2.2:'FizzBuzz' from Eloquent Javscript.
*/

for (let n = 1; n <= 100; n++) {
    let output = "";
    if ((n % 3) === 0) {
        output += "Fizz";
    }
    if ((n % 5) === 0) {
        output += "Buzz";
    }
    
    console.log(output || n);
}
