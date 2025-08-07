// Write a program to reverse a given string.
// Input: This is a string
// Output: gnirts a si sihT

import java.util.Scanner;

public class ReverseString3 {
    public static String reverse(String input) {
        String reversedString = "";
        for (int i = input.length() - 1; i >= 0; i--) {
            reversedString += input.charAt(i);
        }
        return reversedString;
    }
    public static void main(String[] args) {
        // Create a scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        String myStr;
        System.out.println("Enter a string to reverse:");
        myStr = scanner.nextLine();

        String reversedString = reverse(myStr);
        System.out.println(reversedString);

        // Close the scanner
        scanner.close();
    }
}
