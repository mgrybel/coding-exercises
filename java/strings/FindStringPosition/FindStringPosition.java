package strings.FindStringPosition;

import java.util.Scanner;

public class FindStringPosition {
    public static void main(String[] main) {
        // Create a scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        String myStr;
        int position;

        System.out.println("Enter a sentence with the word Java in it: ");
        myStr = scanner.nextLine();

        position = myStr.indexOf("Java");

        System.out.println("The position is: " + position);

        // Close the scanner
        scanner.close();
    }
}
