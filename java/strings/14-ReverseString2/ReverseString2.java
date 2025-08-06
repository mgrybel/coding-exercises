// Write a program to reverse a given string.
// Input: This is a string
// Output: gnirts a si sihT

import java.util.Scanner;

public class ReverseString2 {
    public static void main(String[] args) {
        // Create a scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        String originalStr, reversedStr = "";

        System.out.println("Enter a string to reverse: ");
        originalStr = scanner.nextLine();

        for (int i = 0; i < originalStr.length(); i++) {
            reversedStr = originalStr.charAt(i) + reversedStr;
            // System.out.println("i is equal to: " + i);
            // System.out.println("originalStr.charAt(i) is equal to: " + originalStr.charAt(i) );
            // System.out.println("reversedStr is equal to: " + reversedStr);
        }

        System.out.println("The original string: " + originalStr);
        System.out.println("The reversed string: " + reversedStr);

        // Close the scanner
        scanner.close();
    }
}
