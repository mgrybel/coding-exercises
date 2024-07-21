package strings;

import java.util.Scanner;

public class RemoveWhitespace {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String firstStr, secondStr;

        System.out.println("Enter a string with whitespace characters: ");
        firstStr = cin.nextLine();

        secondStr = firstStr.trim();

        System.out.println("The original string: " + firstStr);
        System.out.println("The string without whitespace characters: " + secondStr);
    }
}
