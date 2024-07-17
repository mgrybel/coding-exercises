package strings;

import java.util.Scanner;

public class CountCharacters {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] main) {
        String a;
        int b;

        System.out.println("Enter a string: ");
        a = cin.nextLine();

        b = a.length();

        System.out.println("The number of characters is equal to: " + b);
    }
}
