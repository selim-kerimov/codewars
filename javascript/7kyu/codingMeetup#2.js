// https://www.codewars.com/kata/58279e13c983ca4a2a00002a

/**
 * 7 kyu - Coding Meetup #2 - Higher-Order Functions Series - Greet developers
 * 
 * You will be given an array of objects (associative arrays in PHP, tables in COBOL) 
 * representing data about developers who have signed up to attend the next coding meetup that you are organising.
 * 
 * Your task is to return an array where each object will have a new property 'greeting' with the following string value:
 * 
 * Hi < firstName here >, what do you like the most about < language here >?
 */
function greetDevelopers(list) {
  return list.map(i => ({ ...i, greeting: `Hi ${i.firstName}, what do you like the most about ${i.language}?` }));
};

const obj = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

console.log(greetDevelopers(obj));
