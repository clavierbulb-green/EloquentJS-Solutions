/*
 * Function that takes in a 2D array and returns flat array version
 *
 * Written as a solution to ex.5.1:Flattening from Eloquent Javascript
 */

function flatten(array) {
    return array.reduce((a, b) => a.concat(b));
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));
