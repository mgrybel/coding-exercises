package strings;

import java.util.Scanner;

public class CompareStrings {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String a, b;

        System.out.println("Enter the first string to compare: ");
        a = cin.nextLine();

        System.out.println("Enter the second string to compare");
        b = cin.nextLine();

        System.out.println("Is string 1 equal to string 2? " + a.equals(b));
    }
}
