// https://www.codewars.com/kata/57aa218e72292d98d500240f

/**
 * 7 kyu - Heron's formula
 * 
 * Write function heron which calculates the area of a triangle with sides a, b, and c (x, y, z in COBOL).
 * 
 * Heron's formula:
 * 
 * sqrt(s * (s - a) * (s - b) * (s - c))
 * 
 * where s = (a + b + c) / 2
 * 
 * # Notes
 * 
 * All inputs are valid triangles with integer sides.
 * 
 * You do not need to round anything. Answers will be tested for correctness within a margin of 0.01.
 */
function heron(a, b, c) {
  const s = (a + b + c) / 2;
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log(heron(3, 4, 5))
