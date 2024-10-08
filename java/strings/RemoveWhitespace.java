package strings;

import java.util.Scanner;

public class RemoveWhitespace {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String firstStr, secondStr;

        System.out.println("Enter a string with whitespace characters: ");
        firstStr = scanner.nextLine();

        secondStr = firstStr.trim();

        System.out.println("The original string: " + firstStr);
        System.out.println("The string without whitespace characters: " + secondStr);

        scanner.close();
    }
}
