package kyu8

// https://www.codewars.com/kata/583710ccaa6717322c000105/train/kotlin

/**
 * 8 kyu - Simple multiplication
 *
 * This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
 */

fun simpleMultiplication(n: Int): Int {
    return  n * (8 + n % 2)
}

fun main() {
    println(simpleMultiplication(3))
}