// Write a program that calculates and displays the arithmetic mean 
// of three grades entered by the user.

import java.util.Scanner;

public class Grades {
    public static void main(String[] args) {
        // Create a scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        // Prompt the user for the three grades
        System.out.println("Enter the first grade: ");
        double grade1 = scanner.nextDouble();

        System.out.println("Enter the second grade: ");
        double grade2 = scanner.nextDouble();

        System.out.println("Enter the third grade: ");
        double grade3 = scanner.nextDouble();

        // Calculate the arithmetic mean
        double arithmeticMean = (grade1 + grade2 + grade3) / 3;

        // Display the arithmetic mean
        System.out.println("Arithmetic mean of the three grades: " + arithmeticMean);

        // Close the scanner
        scanner.close();
    }
}
