package strings;

import java.util.Scanner;
import java.util.regex.Pattern;

public class ReverseWordsInSentence {
    static Scanner cin = new Scanner(System.in);

    static String reverseWords(String str) {
        // Specify the pattern to be searched
        // the regular expression \s matches a single whitespace character
        Pattern pattern = Pattern.compile("\\s");

        // Split String str with a pattern
        // i.e., split the string whenever their is
        // a whitespace character and store it in a temp array.
        String[] temp = pattern.split(str);
        String result = "";

        // Iterate over the temp array and
        // store the string in a reverse order
        for (int i = 0; i < temp.length; i++) {
            if (i == temp.length - 1) {
                result = temp[i] + result;
            } else {
                result = " " + temp[i] + result;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        String a, b;

        System.out.println("Enter a sentence to reverse: ");
        a = cin.nextLine();

        b = reverseWords(a);

        System.out.println("The original sentence: " + a);
        System.out.println("The reversed sentence: " + b);
    }
}