// https://www.codewars.com/kata/54f8b0c7a58bce9db6000dc4/train/javascript

/**
 * 6 kyu - Rotate Array (JS)
 * 
 * Note: This kata is a translation of this (Java) one: http://www.codewars.com/kata/rotate-array. 
 * I have not translated this first one as usual because I did not solved it, and 
 * I fear not being able to solve it (Java is not my cup of... tea). @cjmcgraw, 
 * if you want to use my translation on your kata feel free to use it.
 * 
 *	Create a function named "rotate" that takes an array and returns a new one with the elements inside rotated n spaces.
 *
 * If n is greater than 0 it should rotate the array to the right. If n is less than 0 it should rotate the array to the left. 
 * If n is 0, then it should return the array unchanged.
 */

function rotate(array, n) {
  if (array.length === 0) return array

	n = n % array.length

  return [
    ...array.slice(n * -1),
    ...array.slice(0, n > 0 ? array.length - n : n * -1)
  ]	
}

const data = [1, 2, 3, 4, 5]

console.log(rotate(data, 7))