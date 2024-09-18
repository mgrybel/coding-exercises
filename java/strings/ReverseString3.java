package strings;

import java.util.Scanner;

// Reverse a given string
// Input: This is a string
// Output: gnirts a si sihT
public class ReverseString3 {
    static Scanner cin = new Scanner(System.in);

    public static String reverse(String input) {
        String reversedString = "";
        for (int i = input.length() - 1; i >= 0; i--) {
            reversedString += input.charAt(i);
        }
        return reversedString;
    }
    public static void main(String[] args) {
        String myStr;
        System.out.println("Enter a string to reverse:");
        myStr = cin.nextLine();

        String reversedString = reverse(myStr);
        System.out.println(reversedString);
    }
}
