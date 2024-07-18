package strings;

import java.util.Scanner;

public class RetrieveCharacter {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String a;

        System.out.println("Enter a sentence:");
        a = cin.nextLine();

        System.out.println("The character at index 0: " + a.charAt(0));
        System.out.println("The character at index 9: " + a.charAt(9));
    }
}