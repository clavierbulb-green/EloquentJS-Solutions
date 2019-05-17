/*
Filename: main.js

Description: A collection of functions that manipulate list objects (objects
made up of listed objects where each object has a reference to the following
object). The first two functions create a list from a given array, and an
array from a given list respectively. prepend() creates a new list that adds 
an element to the front of a list, while nth() returns the element at a given 
position in a list.

Solution to the exercise 'List' from chapter 4 of Eloquent 
Javascript
*/

//populates a list object from a given array
function arrayToList(array) {
    let list = {};
    //point to position in list to add next value
    let current = list;
    for (let i = 0; i < array.length; i++) {
        current.value = array[i];
        current.rest = {};
        current = current.rest;
    }
    current = null; //last rest not being set to null TODO
    return list;
}

//populates an array from a given list object
function listToArray(list) {
    let array = [];
    let current = list;
    
    while(current != null) {
        if(current.value != undefined) {
            array.push(current.value);
        }
        current = current.rest;
    }   
    return array;
}

//creates a new list with a given element added to the front of a given list
function prepend(element, list) {
    let newList = {
        value: element,
    }

    //create deep copy of given list, and add to rest of new list
    let listArrayTemp = listToArray(list);
    newList.rest = arrayToList(listArrayTemp);

    return newList;
}

/*returns the element at position n in a given list, returns
undefined otherwise*/
function nth(list, n) {
    let current = list;
    for (let i = 0; i < n; i++) {
        if (current == undefined) {
            return undefined;
        }
        current = current.rest;
    }
    return current.value;
}

//a recrusive version of nth()
function nthRecursive(list, n) {
    let current = list;
    if (current == undefined) {
        return undefined;
    }
    else if (n == 0) {
        //we have reached the nth position, so return the value here
        return current.value;
    }
    else {
        //move to next element in list
        return nthRecursive(current.rest, n - 1);
    }
}

//tests
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nthRecursive(arrayToList([10, 20, 30]), 1));

