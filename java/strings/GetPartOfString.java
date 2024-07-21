package strings;

import java.util.Scanner;

public class GetPartOfString {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String myStr;

        System.out.println("Enter a string:");
        myStr = cin.nextLine();

        System.out.println("The substring from index 4 till the end is: " + myStr.substring(4));
        System.out.println("The substring from index 4 till index 9 is: " + myStr.substring(4, 9));
    }
}