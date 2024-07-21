package strings;

import java.util.Scanner;

public class RetrieveCharacter {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String myStr;

        System.out.println("Enter a sentence:");
        myStr = cin.nextLine();

        System.out.println("The character at index 0: " + myStr.charAt(0));
        System.out.println("The character at index 9: " + myStr.charAt(9));
    }
}