// Write a program to count the number of characters in a given string.

import java.util.Scanner;

public class CountCharacters {
    public static void main(String[] main) {
        // Create a scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        String myStr;
        int count;

        System.out.println("Enter a string: ");
        myStr = scanner.nextLine();

        count = myStr.length();

        System.out.println("The number of characters is equal to: " + count);

        // Close the scanner
        scanner.close();
    }
}
