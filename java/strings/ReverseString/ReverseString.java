package strings.ReverseString;

import java.util.Scanner;

// Reverse a given string
// Input: This is a string
// Output: gnirts a si sihT
public class ReverseString {
    public static void main(String[] args) {
        // Create a scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        String firstStr, secondStr;

        System.out.println("Enter a string to reverse: ");
        firstStr = scanner.nextLine();

        secondStr = new StringBuilder(firstStr).reverse().toString();

        System.out.println("The original string: " + firstStr);
        System.out.println("The reversed string: " + secondStr);

        // Close the scanner
        scanner.close();
    }
}
