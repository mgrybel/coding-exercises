// Write a program to check whether the given number is prime or not.
// Input: 7
// Output: prime

package strings.PrimeNumbers;

public class PrimeNumbers {
    public static boolean isPrime(int n) {
        if (n <= 1) {
            return false;
        } else {
            for (int i = 2; i < n; i++) {
                if (n % i == 0) {
                    return false;
                }
            }
        }
        return true;
    }

    public static void main(String[] args) {
        if (isPrime(17)) {
            System.out.println("It is a prime number/");
        } else {
            System.out.println("It is not a prime number.");
        }
    }
}
