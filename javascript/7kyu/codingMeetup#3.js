// https://www.codewars.com/kata/5827acd5f524dd029d0005a4

/**
 * 7 kyu - Coding Meetup #2 - Higher-Order Functions Series - Greet developers
 * 
 * You will be given an array of objects (associative arrays in PHP) 
 * representing data about developers who have signed up to attend the next coding meetup that you are organising.
 * 
 * Your task is to return:
 * 
 * true if at least one Ruby developer has signed up; or
 * 
 * false if there will be no Ruby developers.
 */

function isRubyComing(list) {
  return list.some(i => i.language === 'Ruby');
}

const obj = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

console.log(isRubyComing(obj));