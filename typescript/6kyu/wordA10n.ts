// https://www.codewars.com/kata/5375f921003bf62192000746/train/typescript

/**
 * 6 kyu - Word a10n (abbreviation)
 * 
 *  The word i18n is a common abbreviation of internationalization in the developer community, used instead of typing the whole word and 
 * trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility.
 * 
 * Write a function that takes a string and turns any and all "words" (see below) within that string of length 4 or greater into an 
 * abbreviation, following these rules:
 * 
 * A "word" is a sequence of alphabetical characters. By this definition, any other character like a space or hyphen 
 * (eg. "elephant-ride") will split up a series of letters into two words (eg. "elephant" and "ride").
 * 
 * The abbreviated version of the word should have the first letter, then the number of removed characters, then the last letter 
 * (eg. "elephant ride" => "e6t r2e").
 */

export function abbreviate(str: string): string {
  let result = ''

  for (const item of str.split(/([^A-Za-z])/g)) {
    if (item.length < 4) result += item
    else result = result + item[0] + String(item.length -2) + item[item.length - 1]
  }

  return result
}

console.log(abbreviate('elephant-rides are really fun!'))
