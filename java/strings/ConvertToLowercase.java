package strings;

import java.util.Scanner;

public class ConvertToLowercase {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String firstStr, secondStr;

        System.out.println("Enter a sentence with uppercase letters:");
        firstStr = cin.nextLine();

        secondStr = firstStr.toLowerCase();

        System.out.println("The original sentence: " + firstStr);
        System.out.println("The sentence converted to lowercase: " + secondStr);
    }
}
