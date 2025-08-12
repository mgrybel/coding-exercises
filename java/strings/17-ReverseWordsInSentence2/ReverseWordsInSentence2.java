// Write a program to reverse words in a given sentence.

import java.util.Scanner;

public class ReverseWordsInSentence2 {
    public static void main(String[] args) {
        // Create a scanner object to read input from the user
        Scanner scanner = new Scanner(System.in);

        String originalStr, reversedStr = "";
        String[] words;

        System.out.println("Enter a sentence to reverse: ");
        originalStr = scanner.nextLine();

        words = originalStr.split(" ");

        for (int i = words.length - 1; i >= 0; i--) {
            reversedStr += words[i];

            if (i != 0) {
                reversedStr += " ";
            }
        }

        System.out.println("The original sentence: " + originalStr);
        System.out.println("The reversed sentence: " + reversedStr);

        // Close the scanner
        scanner.close();
    }
}
