package strings;

import java.util.Scanner;

// Write a program to calculate the count of non-space characters
// in a given string.
// Input: This is a string
// Output: 13
public class CharacterCount {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String myStr;
        int count = 0;

        System.out.println("Enter a string: ");
        myStr = scanner.nextLine();

        for (int i = 0; i < myStr.length(); i++) {
            if (myStr.charAt(i) != ' ') {
                count++;
            }
        }
        System.out.println("The number of characters is equal to: " + count);

        scanner.close();
    }
}
