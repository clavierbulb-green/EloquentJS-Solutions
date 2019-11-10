/*
Two functions which reverse the contents of a given array:

The first, reverseArray(), returns a new array, while the second,
reverseArrayInPlace(), modifies a given array directly.

Solution to ex.4.2:'Reversing an Array' from Eloquent Javascript.
*/

//returns a new array which has the elements of a given array in reverse order
function reverseArray(array) {
    let reversedArray = [];

    for (let i = 0; i < array.length; i++) {
        reversedArray.unshift(array[i]);
    }
    return reversedArray;
}

//modifies a given array so that the order of its elements are reversed
function reverseArrayInPlace(array) {
    let tempArray = reverseArray(array);

    for (let i = 0; i < array.length; i++) {
        array.push(tempArray[i]);
        array.shift();
    }
}

//tests
console.log(reverseArray(["A", "B", "C"]));

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

