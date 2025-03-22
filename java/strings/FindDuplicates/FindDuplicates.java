// Find duplicate characters in a given string string, e.g.
// Input: hackerearth
// Output: h a e r

package strings.FindDuplicates;

import java.util.Scanner;

public class FindDuplicates {
    public static void main(String[] args) {
        // Create a scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        String myStr, s;
        char[] character;
        boolean isNotDuplicate = false;

        System.out.println("Enter a string with duplicate characters in it: ");
        myStr = scanner.nextLine();

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

        // Close the scanner
        scanner.close();
    }
}
