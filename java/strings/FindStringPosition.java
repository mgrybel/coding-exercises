package strings;

import java.util.Scanner;

public class FindStringPosition {
    public static void main(String[] main) {
        Scanner scanner = new Scanner(System.in);

        String myStr;
        int position;

        System.out.println("Enter a sentence with the word Java in it: ");
        myStr = scanner.nextLine();

        position = myStr.indexOf("Java");

        System.out.println("The position is: " + position);

        scanner.close();
    }
}
