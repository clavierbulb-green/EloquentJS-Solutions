/* A higher-order function implementation of a for loop.
 *
 * Written as a solution to ex.5.2 from Eloquent Javascript
 */

function loop(n, test, update, f) {
    while(test(n)) {
        f(n);
        n = update(n);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
