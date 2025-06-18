// https://www.codewars.com/kata/58287977ef8d4451f90001a0

/**
 * 7 kyu - Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
 * 
 * Complete the function to determine the number of bits required to convert integer A to integer B (where A and B >= 0)
 * 
 * The upper limit for A and B is 216, int.MaxValue or similar.
 * 
 * For example, you can change 31 to 14 by flipping the 4th and 0th bit:
 * 
 * 1) 31 - 0 0 0 1 1 1 1 1
 * 2) 14 - 0 0 0 0 1 1 1 0
 * 
 * Thus 31 and 14 should return 2.
 */
function convertBits(a, b){
  a = a.toString(2);
  b = b.toString(2);
  const maxLength = Math.max(a.length, b.length)

  const arr1 = [...a.padStart(maxLength, '0')];
  const arr2 = [...b.padStart(maxLength, '0')];

  return arr1.filter((item, index) => item != arr2[index]).length
}

console.log(convertBits(312312312, 5645657));
