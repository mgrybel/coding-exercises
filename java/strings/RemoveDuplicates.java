package strings;

import java.util.LinkedHashSet;
import java.util.Scanner;

// Remove duplicate characters from a given string
// Input: hackerearth
// Output: hackert
public class RemoveDuplicates {
    static Scanner cin = new Scanner(System.in);

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
        String myStr;
        System.out.println("Enter a string with duplicate characters in it, e.g.,: hackerearth");
        myStr = cin.nextLine();

        String result = removeDup(myStr);
        System.out.println(result);
    }
  
}
