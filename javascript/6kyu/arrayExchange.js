// https://www.codewars.com/kata/5353212e5ee40d4694001114

/**
 * 6 kyu - Array Exchange
 * 
 * Array Exchange and Reversing
 * 
 * It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place 
 * in a way that their new content is also reversed. The arrays may be of unequal lengths, in which case you 
 * will have to expand the shorter one in-place.
 * 
 * ### before
 * my_array = ['a', 'b', 'c']
 * other_array = [1, 2, 3]
 * 
 * ### after
 * my_array == [3, 2, 1]
 * other_array == ['c', 'b', 'a']
 */
function exchangeWith() {
  const temp = [...a]
  a.length = 0
  a.push(...b.reverse())
  b.length = 0
  b.push(...temp.reverse())
}

let a =  ["1", "2", "3", "4", "5", "6", "7"]
let b = ["a", "b", "c"]

exchangeWith(a, b)

console.log({ a, b });
