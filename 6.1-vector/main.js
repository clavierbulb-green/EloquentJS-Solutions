/* A class that represents a vector in two-dimensional space
 *
 * Written as a solution to ex.6.1:A Vector Type from Eloquent Javascript
 */
"use strict";

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    plus(other) {
        let x = this.x + other.x;
        let y = this.y + other.y;
        return new Vec(x, y);
    }
    minus(other) {
        let x = this.x - other.x;
        let y = this.y - other.y;
        return new Vec(x, y);
    }
    /* Return the length of this vector (i.e. the distance from the point
     * (x,y) from the origin (0, 0).*/
    get length() {
        return Math.sqrt((this.x ** 2) + (this.y ** 2));
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
