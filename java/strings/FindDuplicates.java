package strings;

import java.util.Scanner;

// Find duplicate characters in a given string string, e.g.
// Input: hackerearth
// Output: h a e r
public class FindDuplicates {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String myStr, s;
        char[] character;
        boolean isNotDuplicate = false;

        System.out.println("Enter a string with duplicate characters in it: ");
        myStr = cin.nextLine();

        s = myStr.toLowerCase();
        character = s.toCharArray();

        for (int i = 0; i < s.length(); i++) {
            boolean isDuplicate = false;

            for (int j = i + 1; j < s.length(); j++) {
                if (character[i] == character[j]) {
                    isDuplicate = true;
                    break;
                }
            }

            if (isDuplicate) {
                System.out.println(character[i]);
                isNotDuplicate = true;
            }
        }

        if (!isNotDuplicate) {
            System.out.println("No duplicates found!");
        }
    }
}
