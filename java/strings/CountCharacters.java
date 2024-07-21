package strings;

import java.util.Scanner;

public class CountCharacters {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] main) {
        String myStr;
        int count;

        System.out.println("Enter a string: ");
        myStr = cin.nextLine();

        count = myStr.length();

        System.out.println("The number of characters is equal to: " + count);
    }
}
