package kyu8

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/kotlin

/**
 * 8 kyu - Remove First and Last Character
 *
 * #### Task
 *
 * Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.
 *
 * Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.
 *
 * 1. 'eloquent' --> 'loquen'
 * 2. 'country'  --> 'ountr'
 * 3. 'person'   --> 'erso'
 * 4. 'ab'       --> '' (empty string)
 * 5. 'xyz'      --> 'y'
 *
 * #### Requirements
 * 1. The input string will always have at least 2 characters
 * 2. For strings with exactly 2 characters, return an empty string
 * 3. For strings with 3 or more characters, remove the first and last character
 * 4. The function should handle strings containing letters, numbers, and special characters
 *
 * ### Test Cases
 *
 * Your solution will be tested against:
 * 1. Basic functionality with common words
 * 2. Edge cases with 2-character and 3-character strings
 * 3. Strings containing numbers and special characters
 * 4. Random test cases of varying lengths
 */

fun removeChar(str: String): String {
    return str.substring(1, str.lastIndex)
}

fun main() {
    println(removeChar("eloquent"))
}