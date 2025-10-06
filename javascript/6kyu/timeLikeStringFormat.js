// https://www.codewars.com/kata/51e000d070fe4414000003f0/train/javascript

/**
 * 6 kyu - Time-like string format
 * 
 * Build up a method that takes a positive integer and formats it to a 'time - like' format. The method must raise an exception 
 * if its hour length is less than 3 digits and greater than 4.
 * 
 * ### Examples
 * - 800   --> '8:00'
 * - 1000  --> '10:00'
 * - 1451  --> '14:51'
 * - 3351  --> '33:51'
 * - 10000 --> raise an exception
 */
function solution(hour) {
    const str = String(hour)

    if (str.length < 3 || str.length > 4) throw new Error('Error!');
    return str.slice(0, str.length - 2) + ':' + str.slice(str.length - 2);
}

console.log(solution(800))
console.log(solution(1000))
console.log(solution(1451))
console.log(solution(3351))
console.log(solution(10000))