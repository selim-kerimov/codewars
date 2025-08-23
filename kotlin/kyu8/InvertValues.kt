package kyu8

// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/kotlin

/**
 * 8 kyu - Invert values
 *
 * Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
 *
 * 1. [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
 * 2. [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
 * 3. [] --> []
 */
fun invert(arr: IntArray): IntArray {
    return arr.map { -it }.toIntArray()
}

fun main() {
    println(invert(intArrayOf(1, 2, 3, 4, 5)).joinToString())
    println(invert(intArrayOf(1, -2, 3, -4, 5)).joinToString())
    println(invert(intArrayOf()).joinToString())
}