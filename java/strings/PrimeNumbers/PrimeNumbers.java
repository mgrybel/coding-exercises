package strings.PrimeNumbers;

// Write a program to check whether
// the given number is prime or not.
// Input: 7
// Output: prime
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
            System.out.println("Prime");
        } else {
            System.out.println("Not Prime");
        }
    }
}
