// https://www.codewars.com/kata/5828713ed04efde70e000346

/**
 * 7 kyu - Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages
 * 
 * You will be given an array of objects (associative arrays in PHP, table in COBOL, dictionaries in Python) 
 * representing data about developers who have signed up to attend the next coding meetup that you are organising.
 * 
 * Your task is to return an object (associative array in PHP, table in COBOL, dictionary in Python) 
 * which includes the count of each coding language represented at the meetup.
 * 
 * your function should return the following object (associative array in PHP, table in COBOL):
 * 
 * { C: 2, JavaScript: 1, Ruby: 1 }
 */
function countLanguages(list) {
  let result = {};

  for (const item of list) {
    result[item.language] = (result[item.language] || 0) + 1;
  };

  return result;
}

const obj = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];

console.log(countLanguages(obj));
