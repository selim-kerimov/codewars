package kyu8

// https://www.codewars.com/kata/583710ccaa6717322c000105/train/kotlin

/**
 * 8 kyu - Convert a Boolean to a String
 *
 * Implement a function which convert the given boolean value into its string representation.
 *
 * Note: Only valid inputs will be given.
 */
fun doubleChar(s: String): String {
    return s.map { "$it$it" }.joinToString("")
}

fun main() {
    println(doubleChar("Hello World"))
}