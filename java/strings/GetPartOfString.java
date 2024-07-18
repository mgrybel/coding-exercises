package strings;

import java.util.Scanner;

public class GetPartOfString {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String a;

        System.out.println("Enter a string:");
        a = cin.nextLine();

        System.out.println("The substring from index 4 till the end is: " + a.substring(4));
        System.out.println("The substring from index 4 till index 9 is: " + a.substring(4, 9));
    }
}