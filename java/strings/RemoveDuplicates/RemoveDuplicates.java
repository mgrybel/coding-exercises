// Remove duplicate characters from a given string
// Input: hackerearth
// Output: hackert

package strings.RemoveDuplicates;

import java.util.LinkedHashSet;
import java.util.Scanner;

public class RemoveDuplicates {
    public static String removeDup(String inputString) {
        String lowercaseString = inputString.toLowerCase();
        char[] characters = lowercaseString.toCharArray();
        LinkedHashSet<Character> uniqueCharacters = new LinkedHashSet<>();

        for (char character : characters) {
            if (!uniqueCharacters.contains(character)) {
                uniqueCharacters.add(character);
            }
        }

        StringBuilder result = new StringBuilder();

        for (char character : uniqueCharacters) {
            result.append(character);
        }

        return result.toString();
    }

    public static void main(String[] args) {
        // Create a scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        String myStr;
        System.out.println("Enter a string with duplicate characters in it, e.g.,: hackerearth");
        myStr = scanner.nextLine();

        String result = removeDup(myStr);
        System.out.println(result);

        // Close the scanner
        scanner.close();
    }
}
