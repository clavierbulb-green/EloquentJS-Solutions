/*
Filename: main.js

Description: A function which makes a deep comparison of two input values.

Solution to the exercise 'Deep Comparison' from chapter 4 of Eloquent 
Javascript
*/

/* returns true if two given values are the same value or are objects with the 
same properties, where the values of the properties are equal when compared 
with a recursive call to deepEqual*/
function deepEqual(value1, value2) {
    //if the values are not both objects, they can be compared directly(===)
    if (!((typeof(value1) === "object") && (typeof(value2) === "object"))) {
        return (value1 === value2);
    }
    else {
        //typeof(null) === "object", so must check if values are null
        if ((value1 === null) || (value2 === null)) {
            return (value1 === value2);
        }
        //both values are objects, so must deep compare
        
        //first compare object keys
        let keys1 = Object.keys(value1);
        let keys2 = Object.keys(value2);
        if (keys1.length !== keys2.length) {
            return false;
        }

        for (let i = 0; i < keys1.length; i++) {
            let currentKey1 = keys1[i];
            let currentKey2= keys2[i];

            //compare key names
            if (currentKey1 !== currentKey2) {
                return false;
            }
            //recursive comparison of values given by current key
            if (!deepEqual(value1[currentKey1], value2[currentKey2])) {
                return false;
            }
        }
        return true;
   } 
}

//tests
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
