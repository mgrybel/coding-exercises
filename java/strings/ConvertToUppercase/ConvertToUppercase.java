package strings.ConvertToUppercase;

import java.util.Scanner;

public class ConvertToUppercase {
    public static void main(String[] args) {
        // Create a scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        String firstStr, secondStr;

        System.out.println("Enter a sentence with lowercase letters:");
        firstStr = scanner.nextLine();

        secondStr = firstStr.toUpperCase();

        System.out.println("The original sentence: " + firstStr);
        System.out.println("The sentence converted to uppercase: " + secondStr);

        // Close the scanner
        scanner.close();
    }
}
