// Write a program that calculates the arithmetic mean of two numbers.

import java.util.Scanner;

public class Mean {
    // Create a scanner object to read input from the user
    static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        // Prompt the user for the first number
        System.out.println("Enter the first number: ");
        double num1 = scanner.nextDouble();

        // Prompt the user for the second number
        System.out.println("Enter the second number: ");
        double num2 = scanner.nextDouble();

        // Calculate the arithmetic mean
        double arithmeticMean = (num1 + num2) / 2;

        // Display the arithmetic mean
        System.out.println("Arithmetic mean: " + arithmeticMean);

        // Close the scanner
        scanner.close();
    }
}
