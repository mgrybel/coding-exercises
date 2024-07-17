package strings;

import java.util.Scanner;

public class RemoveWhitespace {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String a, b;

        System.out.println("Enter a string with whitespace characters: ");
        a = cin.nextLine();

        b = a.trim();

        System.out.println("The original string: " + a);
        System.out.println("The string without whitespace characters: " + b);
    }
}
