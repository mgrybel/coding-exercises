package strings;

import java.util.Scanner;

public class FindStringPosition {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] main) {
        String myStr;
        int position;

        System.out.println("Enter a sentence with the word Java in it: ");
        myStr = cin.nextLine();

        position = myStr.indexOf("Java");

        System.out.println("The position is: " + position);
    }
}
