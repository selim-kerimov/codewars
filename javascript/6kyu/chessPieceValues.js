// https://www.codewars.com/kata/5832514f64a4cecd1c000013/train/javascript

/**
 * 6 kyu - Chess piece values
 * 
 * ### Task
 * 
 * Complete the function that accepts two arguments, an 8x8 array representing a chess board and a string. Depending on the value of the 
 * string which can be either "white" or "black", calculate the value of the pieces on the table for the corresponding player (white or black).
 * Empty fields will be marked as a space, while the fields with pieces look like this:
 * 
 * 1. "w-king"   // meaning white king
 * 2. "b-bishop" // a black bishop
 * 3. "w-pawn"   // a white pawn
 * 
 * This is a rough estimation and the real piece value depends on other factors in game as well, such as the game being a closed or 
 * open one, which can favor either knights or bishops. But for our purposes we will use the mentioned values.
 * 
 * Note: the value of a king cannot be estimated because without it the game would be over, so DO NOT take into consideration the value 
 * of the king. You will not be tested for invalid input.
 * 
 * ### Example
 * [ [" ", " ", " ", " ", " ", " ", " ", " "],
 *   [" ", " ", "b-queen", " ", " ", " ", " ", "w-queen"],
 *   [" ", "b-king", " ", " ", "w-rook", " ", " ", " "],
 *   [" ", " ", " ", " ", " ", " ", " ", " "],
 *   [" ", " ", " ", " ", " ", " ", " ", " "],
 *   ["w-king", " ", " ", " ", " ", " ", " ", " "],
 *   [" ", " ", " ", " ", " ", " ", " ", " "],
 *   [" ", " ", " ", " ", " ", " ", " ", " "] 
 * ], 
 * "white")
 */

function piecesValue(arr, s) {
  let result = 0

  const pieceValue = {
    pawn: 1,
    knight: 3,
    bishop: 3,
    rook: 5,
    queen: 9,
  }

  for (const rank of arr) {
    for (const square of rank) {
      if (square.startsWith(s[0]) && square !== `${s[0]}-king`) {
        result += pieceValue[square.split('-')[1]]
      }
    }
  }

  return result
}

console.log(piecesValue(
  [
    ['b-bishop',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ','b-queen',' ',' ',' ',' ','w-queen'],
    [' ','b-king',' ','b-pawn','w-rook',' ',' ',' '],
    [' ',' ',' ',' ','w-pawn',' ',' ',' '],
    [' ',' ',' ',' ',' ','w-bishop',' ',' '],
    ['w-king',' ',' ',' ',' ',' ',' ',' '],
    [' ',' ','b-pawn','b-pawn',' ',' ',' ',' '],
    [' ',' ',' ',' ',' ',' ',' ',' ']
  ],
  'white'
))
