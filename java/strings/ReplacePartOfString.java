package strings;

import java.util.Scanner;

public class ReplacePartOfString {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String a, b;

        System.out.println("Enter a sentence with the word C++ in it: ");
        a = cin.nextLine();

        b = a.replace("C++", "Java");

        System.out.println("The original sentence: " + a);
        System.out.println("The modified sentence: " + b);
    }
}
