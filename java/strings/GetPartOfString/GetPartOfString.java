package strings.GetPartOfString;

import java.util.Scanner;

public class GetPartOfString {
    public static void main(String[] args) {
        // Create a scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        String myStr;

        System.out.println("Enter a string:");
        myStr = scanner.nextLine();

        System.out.println("The substring from index 4 till the end is: " + myStr.substring(4));
        System.out.println("The substring from index 4 till index 9 is: " + myStr.substring(4, 9));

        // Close the scanner
        scanner.close();
    }
}