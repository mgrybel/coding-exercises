package strings;

import java.util.Scanner;

public class CompareStrings {
    public static void main(String[] args) {
        // Create a scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        String firstStr, secondStr;

        System.out.println("Enter the first string to compare: ");
        firstStr = scanner.nextLine();

        System.out.println("Enter the second string to compare");
        secondStr = scanner.nextLine();

        System.out.println("Is string 1 equal to string 2? " + firstStr.equals(secondStr));

        // Close the scanner
        scanner.close();
    }
}
