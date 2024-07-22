package strings;

import java.util.Scanner;

public class ReverseWordsInSentence2 {
    static Scanner cin = new Scanner(System.in);

    public static void main(String[] args) {
        String a, b = "";
        String[] words;

        System.out.println("Enter a sentence to reverse: ");
        a = cin.nextLine();

        words = a.split(" ");

        for (int i = words.length - 1; i >= 0; i--) {
            b += words[i];

            if (i != 0) {
                b += " ";
            }
        }

        System.out.println("The original sentence: " + a);
        System.out.println("The reversed sentence: " + b);
    }
}
