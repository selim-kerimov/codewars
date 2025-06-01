// https://www.codewars.com/kata/5356ad2cbb858025d800111d

/**
 * 7 kyu - Name Array Capping
 * 
 * Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.
 * 
 * # Examples
 * 
 * ["jo", "nelson", "jurie"] -->  ["Jo", "Nelson", "Jurie"]
 * 
 * ["KARLY", "DANIEL", "KELSEY"] --> ["Karly", "Daniel", "Kelsey"]
 */

function capMe(names) {
  return names.map(i => i[0].toUpperCase() + i.slice(1).toLocaleLowerCase());
}

console.log(capMe(["KARLY", "DANIEL", "KELSEY"]))
