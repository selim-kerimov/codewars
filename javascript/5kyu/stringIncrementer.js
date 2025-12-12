// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript

/**
 * 5 kyu - String incrementer
 * 
 * Your job is to write a function which increments a string, to create a new string.
 * - If the string already ends with a number, the number should be incremented by 1.
 * - If the string does not end with a number. the number 1 should be appended to the new string.
 * 
 * ### Examples:
 * - foo -> foo1
 * - foobar23 -> foobar24
 * - foo0042 -> foo0043
 * - foo9 -> foo10
 * - foo099 -> foo100
 * 
 * Attention: If the number has leading zeros the amount of digits should be considered.
 */
function incrementString (strng) {
  const arr = strng.split(/(?<=[a-z])(?=\d)/)
  const lastItem = arr[arr.length - 1]

  if (Number(lastItem) + 1) {
    arr[arr.length - 1] = String(Number(lastItem) + 1).padStart(lastItem.length, '0')
    return arr.join('')
  }

  return strng + '1'
}

console.log(incrementString('foobar'))  // should return: 'foobar1'
console.log(incrementString('foobar000'))  // should return: 'foobar001'
console.log(incrementString('foobar999')) // should return: 'foobar1000'
console.log(incrementString('foobar00999')) // should return: 'foobar01000'