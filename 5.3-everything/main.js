/* Two implementations of the every() array method, one using a loop and 
 * one using the some method.
 *
 * Written as as a solution to ex.5.3:Everything from Eloquent Javascript.
 */

function every(array, test) {
    if (array == 0) {
        return true;
    }
    return array.reduce((a, b) => [a].some(test) && [b].some(test));
}

/*
function every(array, test) {
    for (let e of array) {
        if (!test(e)) {
            return false;
        }
        else {
            continue;
        }
    }
    return true;
}
*/

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));
