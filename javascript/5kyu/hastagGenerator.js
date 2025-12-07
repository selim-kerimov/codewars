// https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript

/**
 * 5 kyu - The Hashtag Generator
 * 
 * The marketing team is spending way too much time typing in hashtags.
 * Let's help them with our own Hashtag Generator!
 * 
 * ### Here's the deal:
 * - It must start with a hashtag (#).
 * - All words must have their first letter capitalized, and remaining letters lowercased.
 * - If the final result is longer than 140 chars it must return false.
 * - If the input or the result is an empty string it must return false.
 * 
 * ### Examples
 * - " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
 * - "    Hello     World   "                  =>  "#HelloWorld"
 * - ""                                        =>  false
 */
function generateHashtag (str) {
  if (!str.trim()) return false;

  const hastag = str
    .split(' ')
    .filter(i => i)
    .map(i => i[0].toUpperCase() + i.slice(1).toLowerCase())
    .join('')

  
  if (hastag.length > 139) return false

  return '#' + hastag
}

console.log(generateHashtag('Hello there thanks for trying my Kata'))  // shoud return: #HelloThereThanksForTryingMyKata
console.log(generateHashtag('    Hello     world   '))  // should return: #HelloWorld
console.log(generateHashtag('     '))  // false