package kyu8;
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

/**
 * 8 kyu - Even or Odd
 * <p>
 * Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */

public class EvenOrOdd {
    public static String evenOrOdd(int number) {
        return number % 2 == 0 ? "Even" : "Odd";
    }
}
