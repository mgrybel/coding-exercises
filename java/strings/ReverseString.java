package strings;

import java.util.Scanner;

public class ReverseString {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String firstStr, secondStr;

        System.out.println("Enter a string to reverse: ");
        firstStr = scanner.nextLine();

        secondStr = new StringBuilder(firstStr).reverse().toString();

        System.out.println("The original string: " + firstStr);
        System.out.println("The reversed string: " + secondStr);

        scanner.close();
    }
}
