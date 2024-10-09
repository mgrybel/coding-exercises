package strings;

import java.util.Scanner;

public class ReplacePartOfString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String firstStr, secondStr;

        System.out.println("Enter a sentence with the word C++ in it: ");
        firstStr = scanner.nextLine();

        secondStr = firstStr.replace("C++", "Java");

        System.out.println("The original sentence: " + firstStr);
        System.out.println("The modified sentence: " + secondStr);

        scanner.close();
    }
}
