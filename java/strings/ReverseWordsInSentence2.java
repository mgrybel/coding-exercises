package strings;

import java.util.Scanner;

public class ReverseWordsInSentence2 {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String originalStr, reversedStr = "";
        String[] words;

        System.out.println("Enter a sentence to reverse: ");
        originalStr = cin.nextLine();

        words = originalStr.split(" ");

        for (int i = words.length - 1; i >= 0; i--) {
            reversedStr += words[i];

            if (i != 0) {
                reversedStr += " ";
            }
        }

        System.out.println("The original sentence: " + originalStr);
        System.out.println("The reversed sentence: " + reversedStr);
    }
}
