package strings;

import java.util.Scanner;

public class ReverseString {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String a, b;

        System.out.println("Enter a string to reverse: ");
        a = cin.nextLine();

        b = new StringBuilder(a).reverse().toString();

        System.out.println("The original string: " + a);
        System.out.println("The reversed string: " + b);

    }
}
