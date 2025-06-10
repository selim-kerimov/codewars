// https://www.codewars.com/kata/58287977ef8d4451f90001a0

/**
 * 7 kyu - Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
 * 
 * You will be given an array of objects (associative arrays in PHP, table in COBOL, dictionaries in Python) 
 * representing data about developers who have signed up to attend the next coding meetup that you are organising.
 * 
 * Your task is to return either:
 * 
 * "true" if all developers in the list code in the same language; or
 * 
 * "false" otherwise.
 */
function isSameLanguage(list) {
  return new Set(list.map(i => i.language)).size === 1;
};

// should return true
const list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];

// should return false
const list2 = [
  { firstName: "Mark", lastName: "G.", country: "Scotland", continent: "Europe", "age": 22, language:"JavaScript" },
  { firstName: "Victoria", lastName: "T.", country: "Puerto Rico", continent: "Americas", age: 30, language: "Clojure" },
  { firstName: "Emma", lastName: "B.", country: "Norway", continent: "Europe", age: 19, language: "Clojure" }
];

console.log(isSameLanguage(list2));
