package strings;

import java.util.Scanner;

public class ReverseString {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String firstStr, secondStr;

        System.out.println("Enter a string to reverse: ");
        firstStr = cin.nextLine();

        secondStr = new StringBuilder(firstStr).reverse().toString();

        System.out.println("The original string: " + firstStr);
        System.out.println("The reversed string: " + secondStr);
    }
}
