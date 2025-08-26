// https://www.codewars.com/kata/5898b4b71d298e51b600014b

/**
 * 6 kyu - Srot the inner ctonnet in dsnnieedcg oredr
 * 
 * You have to sort the inner content of every word of a string in descending order.
 * 
 * The inner content is the content of a word without first and the last char.
 * 
 * Some examples:
 * - "sort the inner content in descending order"  -->  "srot the inner ctonnet in dsnnieedcg oredr"
 * - "wait for me"        -->  "wiat for me"
 * - "this kata is easy"  -->  "tihs ktaa is esay"
 * 
 * 1. Words are made up of lowercase letters.
 * 2. The string will never be null and will never be empty.
 * 3. words will be separated by a single space character
 * 4. the string will have neither leading nor trailing spaces
 * 
 * Have fun coding it and please don't forget to vote and rank this kata! :-)
 * 
 * I have also created other katas. Take a look if you enjoyed this kata!
 */
export function sortTheInnerContent(words: string) {
  return words
    .split(' ')
    .map(w => {
      if (w.length < 4) return w
      return w[0] + [...w].slice(1, w.length - 1).sort((a, b) => b.localeCompare(a)).join('') + w[w.length - 1]
    })
    .join(' ')
}

console.log(sortTheInnerContent("sort the inner content in descending order"))