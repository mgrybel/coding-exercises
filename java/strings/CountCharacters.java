package strings;

import java.util.Scanner;

public class CountCharacters {
    public static void main(String[] main) {
        Scanner scanner = new Scanner(System.in);

        String myStr;
        int count;

        System.out.println("Enter a string: ");
        myStr = scanner.nextLine();

        count = myStr.length();

        System.out.println("The number of characters is equal to: " + count);

        scanner.close();
    }
}
