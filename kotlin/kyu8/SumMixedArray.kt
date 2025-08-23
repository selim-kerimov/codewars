package kyu8

// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/kotlin

/**
 * 8 kyu - Sum Mixed Array
 *
 * Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
 * Return your answer as a number.
 */

public class MixedSum {
    public fun sum(mixed: List<Any>): Int {
        return mixed.sumOf {
            when (it) {
                is Int -> it
                is String -> it.toInt()
                else -> 0
            }
        }
    }
}

fun main() {
    println(MixedSum().sum(listOf(5, "5")))
}