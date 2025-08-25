package kyu8

import kotlin.math.abs

// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/kotlin

/**
 * 8 kyu - Twice as old
 *
 * Your function takes two arguments:
 * 1. current father's age (years)
 * 2. current age of his son (years)
 *
 * Calculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
 * The answer is always greater or equal to 0, no matter if it was in the past, or it is in the future.
 */
fun twiceAsOld(dadYearsOld: Int, sonYearsOld: Int): Int {
    return abs(sonYearsOld * 2 - dadYearsOld)
}

fun main() {
    println(twiceAsOld(36, 7))
    println(twiceAsOld(55, 30))
}