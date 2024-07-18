package strings;

import java.util.Scanner;

public class ConvertToLowercase {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String a, b;

        System.out.println("Enter a sentence with uppercase letters:");
        a = cin.nextLine();

        b = a.toLowerCase();

        System.out.println("The original sentence: " + a);
        System.out.println("The sentence converted to lowercase: " + b);
    }
}
