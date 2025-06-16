// https://www.codewars.com/kata/5aca48db188ab3558e0030fa

/**
 * 7 kyu - Find the calculation type
 * 
 * You have to create a function which receives 3 number arguments: 2 operands a and b, and the result of an unknown operation performed on them.
 * 
 * Based on those 3 values you have to return a string, that describes which operation was used to get the given result.
 * 
 * The possible return strings are: "addition", "subtraction", "multiplication", "division".
 * 
 * ### Examples:
 * 1) (a = 1, b = 2, result = 3)   --> 1 ? 2 = 3   --> "addition"
 * 2) (a = 5, b = 2, result = 2.5) --> 5 ? 2 = 2.5 --> "division"
 * 
 * ### Notes
 * 1) The / operator performs a plain division without rounding.
 * 2) You can assume that there will always be a unique valid answer (no ambiguous cases like e.g. 1 ? 0 = 0 
 * which could be either - or +, or 3 ? 1 = 3 which could be either * or /).
 * 3) You can assume that there will be no division by 0
 */
export function calcType(a: number, b: number, res: number): string {
  if (a + b == res) return 'addition';
  else if (a - b == res) return 'subtraction';
  else if (a * b == res) return 'multiplication';
  else return 'division';
};

console.log(calcType(1, 2, 3));
