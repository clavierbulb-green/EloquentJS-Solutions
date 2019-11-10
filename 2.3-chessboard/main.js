/* A function that returns a string representation of a chessboard of a
 * given size (i.e. height and width).
 *
 * character: character with which to represent black squares
 * size: size of chessboard
 *
 * Written as a solution to Ex.2.3:'Chessboard' from Eloquent 
 * Javascript.
 */

function chessboardStr(character, size) {
    let board = '';
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            if ((row + col) % 2 === 0) {
                board += ' ';
            }
            else {
                board += character;
            }
        }
        board += '\n';
    }
    return board;
}

let new_board = chessboardStr('#', 16);
console.log(new_board);
