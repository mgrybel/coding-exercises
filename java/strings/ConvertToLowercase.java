package strings;

import java.util.Scanner;

public class ConvertToLowercase {
    public static void main(String[] args) {
        // Create a scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        String firstStr, secondStr;

        System.out.println("Enter a sentence with uppercase letters:");
        firstStr = scanner.nextLine();

        secondStr = firstStr.toLowerCase();

        System.out.println("The original sentence: " + firstStr);
        System.out.println("The sentence converted to lowercase: " + secondStr);

        // Close the scanner
        scanner.close(); 
    }
}
