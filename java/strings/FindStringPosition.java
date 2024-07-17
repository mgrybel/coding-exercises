package strings;

import java.util.Scanner;

public class FindStringPosition {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] main) {
        String a;
        int b;

        System.out.println("Enter a sentence with the word Java in it: ");
        a = cin.nextLine();

        b = a.indexOf("Java");

        System.out.println("The position is: " + b);
    }
}
