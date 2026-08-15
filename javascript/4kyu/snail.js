// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript

/**
 * 4 kyu - Snail
 * 
 * Snail Sort
 * 
 * Given an n x n array, return the array elements arranged from outermost elements 
 * to the middle element, traveling clockwise.
 * 
 * array = [[1,2,3],
 *          [4,5,6],
 *          [7,8,9]]
 *  snail(array) #=> [1,2,3,6,9,8,7,4,5]
 * 
 * For better understanding, please follow the numbers of the next array consecutively:
 * 
 * array = [[1,2,3],
 *          [8,9,4],
 *          [7,6,5]]
 * snail(array) #=> [1,2,3,4,5,6,7,8,9]
 * 
 * NOTE: The idea is not sort the elements from the lowest value to the highest; the idea 
 * is to traverse the 2-d array in a clockwise snailshell pattern.
 * 
 * NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
 */
function snail(array) {
  const out = [];
  let top = 0, bottom = array.length - 1;
  let left = 0, right = (array[0]?.length ?? 0) - 1;

  while (top <= bottom && left <= right) {
    for (let c = left; c <= right; c++) out.push(array[top][c]);
    top++;
    for (let r = top; r <= bottom; r++) out.push(array[r][right]);
    right--;
    if (top <= bottom) {
      for (let c = right; c >= left; c--) out.push(array[bottom][c]);
      bottom--;
    }
    if (left <= right) {
      for (let r = bottom; r >= top; r--) out.push(array[r][left]);
      left++;
    }
  }
  return out;
}

console.log(snail([[1,2,3], [4,5,6], [7,8,9]]))
console.log(snail([[1,2,3], [8,9,4], [7,6,5]]))
