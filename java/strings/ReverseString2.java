package strings;

import java.util.Scanner;

public class ReverseString2 {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String originalStr, reversedStr = "";

        System.out.println("Enter a string to reverse: ");
        originalStr = cin.nextLine();

        for (int i = 0; i < originalStr.length(); i++) {
            reversedStr = originalStr.charAt(i) + reversedStr;
            // System.out.println("i is equal to: " + i);
            // System.out.println("originalStr.charAt(i) is equal to: " + originalStr.charAt(i) );
            // System.out.println("reversedStr is equal to: " + reversedStr);
        }

        System.out.println("The original string: " + originalStr);
        System.out.println("The reversed string: " + reversedStr);
    }
}
