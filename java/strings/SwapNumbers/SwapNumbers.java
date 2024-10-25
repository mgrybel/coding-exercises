package strings.SwapNumbers;

// Write a program to swap two numbers
// using the substring method.
// Input: 10 20
// Output: 20 10
public class SwapNumbers {
    public static void main(String[] args) {
        int firstNumber = 10;
        int secondNumber = 20;

        firstNumber = firstNumber + secondNumber;
        secondNumber = firstNumber - secondNumber;
        firstNumber = firstNumber - secondNumber;

        System.out.println(firstNumber);
        System.out.println(secondNumber);
    }
}
