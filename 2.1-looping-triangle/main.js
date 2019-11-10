/* A function that returns a string representation of a right triangle
 * of a given height.
 *
 * Written as a solution to Ex.2.1: Looping a Triangle from Eloquent
 * Javascript.
 *
 * character: character with which to draw triangle
 * height: height of triangle
 */
function triangleStr(character, height) {
    let triangle = '';
    for (let row = 1; row <= height; row++) {
        triangle += character.repeat(row);
        triangle += '\n';
    }
    return triangle;
}

new_triangle = triangleStr('#', 8);
console.log(new_triangle);
