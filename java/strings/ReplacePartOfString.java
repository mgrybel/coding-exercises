package strings;

import java.util.Scanner;

public class ReplacePartOfString {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String firstStr, secondStr;

        System.out.println("Enter a sentence with the word C++ in it: ");
        firstStr = cin.nextLine();

        secondStr = firstStr.replace("C++", "Java");

        System.out.println("The original sentence: " + firstStr);
        System.out.println("The modified sentence: " + secondStr);
    }
}
