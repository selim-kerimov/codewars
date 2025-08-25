// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/typescript

/**
 * 6 kyu - Convert string to camel case
 * 
 * Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
 * The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, 
 * also often referred to as Pascal case). The next words should be always capitalized.
 * 
 * ### Examples
 * 1. "the-stealth-warrior" gets converted to "theStealthWarrior"
 * 2. "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
 * 3. "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
 */
export function toCamelCase(str: string): string {
  const arr = str.split(/[^a-zA-Z0-1]/g)

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1)
  }

  return arr.join('')
}

console.log(toCamelCase("the-stealth-warrior"))
console.log(toCamelCase("The_Stealth_Warrior"))
console.log(toCamelCase("The_Stealth-Warrior"))
console.log(toCamelCase('The-Stealth-Warrior'))