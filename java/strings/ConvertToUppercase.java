package strings;

import java.util.Scanner;

public class ConvertToUppercase {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String a, b;

        System.out.println("Enter a sentence with lowercase letters:");
        a = cin.nextLine();

        b = a.toUpperCase();

        System.out.println("The original sentence: " + a);
        System.out.println("The sentence converted to uppercase: " + b);
    }
}
