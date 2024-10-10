package strings;

import java.util.Scanner;

public class RetrieveCharacter {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String myStr;

        System.out.println("Enter a sentence:");
        myStr = scanner.nextLine();

        System.out.println("The character at index 0: " + myStr.charAt(0));
        System.out.println("The character at index 9: " + myStr.charAt(9));

        scanner.close();
    }
}