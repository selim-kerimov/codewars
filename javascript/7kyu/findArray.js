// https://www.codewars.com/kata/59a2a3ba5eb5d4e609000055

/**
 * 7 kyu - Find array
 * 
 * You are given two arrays arr1 and arr2, where arr2 always contains integers.
 * 
 * ### Write a function such that:
 * 1) For arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] the function returns ['a', 'a']
 * 2) For arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7] the function returns [1, 1, 1]
 * 3) For arr1 = [0, 3, 4], arr2 = [2, 6] the function returns [4]
 * 4) For arr1=["a","b","c","d"] , arr2=[2,2,2], the function returns ["c","c","c"]
 * 5) For arr1=["a","b","c","d"], arr2=[3,0,2] the function returns ["d","a","c"]
 * 
 * Note that when an element inside arr2 is greater than the index of the last element of arr1 no element of arr1 should be added 
 * to the resulting array. If either arr1 or arr2 is empty, you should return an empty arr (empty list in python, empty vector in c++). 
 * Note for c++ use std::vector arr1, arr2.
 */
function findArray(arr1, arr2){
  return arr2.map(i => arr1[i]).filter(i => i != undefined);
}

console.log(findArray(["a","b","c","d"], [3,0,2]))
