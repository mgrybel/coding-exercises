package strings;

import java.util.Scanner;

public class ReverseString {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String a;

        System.out.println("Enter a string to reverse: ");
        a = cin.nextLine();

        System.out.println("The original string: " + a);
        System.out.println("The reversed string: " + new StringBuilder(a).reverse());

    }
}
