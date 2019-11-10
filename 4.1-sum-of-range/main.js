/*

Solution to ex.4.1:'The Sum of a Range' from Eloquent 
Javascript.
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

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
