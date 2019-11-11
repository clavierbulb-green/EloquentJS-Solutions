/* An implementation of an iteralbe Set (a collection of values where each
 * value must be unique).
 *
 * Written as a solution to ex.6.2:Groups, and ex.6.3:Iterable Groups 
 * from Eloquent Javascript.
 */
"use strict";

class Group {
    constructor() {
        this.members = [];
    }
    /* Adds a new member to this Group, unless there is already aa 
     * member with the same value */
    add(member) {
        if (!this.members.includes(member)) {
            this.members.push(member);
        }
    }
    /* Removes a given member from this Group, if it is a member */
    delete(member) {
        if (this.members.includes(member)) {
            this.members.splice(this.members.indexOf(member), 1);
        }
    }
    /* Returns a Boolean value indicating whether its argument is a 
     * member of this group */
    has(member) {
        return this.members.includes(member);
    }
    static from(iterable) {
        let group = new Group();
        for (let x of iterable) {
            group.add(x);
        }
        return group;
    }
}

class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.group = group;
    }
    
    next() {
        if (this.index === this.group.members.length) {
            return {done: true};
        }
        let value = this.group.members[this.index];
        this.index++;
        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

/* test if Group is iterable (ex.6.3) */
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
