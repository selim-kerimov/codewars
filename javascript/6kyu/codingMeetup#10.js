// https://www.codewars.com/kata/582a53ed261c2af9d200018c

/**
 * 6 kyu - Coding Meetup #10 - Coding Meetup #10 - Higher-Order Functions Series - Create usernames
 * 
 * Given the following input array:
 * 
 * var list1 = [
 *  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
 *  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
 * ];
 * 
 * write a function that adds the username property to each object in the input array:
 * 
 * [
 *  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',  username: 'emilyn1990' },
 *  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',  username: 'nore2000' }
 * ]
 * 
 * The value of the username property is composed by concatenating:
 * 1) firstName in lower-case;
 * 2) first letter of the lastName in lower-case; and
 * 3) he birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. 
 * Please make sure that your function delivers the correct birth year irrespective of when it will be executed,0
 * for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
 */
function addUsername(list) {
  list.forEach(i => i.username = `${(i.firstName + i.lastName[0]).toLowerCase()}${new Date().getFullYear() - i.age}`)
  return list
}

const obj = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];

console.log(addUsername(obj));
