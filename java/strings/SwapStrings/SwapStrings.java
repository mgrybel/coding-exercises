package strings.SwapStrings;

// Write a program to swap two strings using a substring method.
// Input: Hello World
// Output: World Hello
public class SwapStrings {
    public static void main(String[] main) {
        String string1 = "Hello";
        String string2  = "World";

        string1 = string1 + string2;
        string2 = string1.substring(0, string1.length() - string2.length());
        string1 = string1.substring(string2.length());

        System.out.println(string1);
        System.out.println(string2);
    }
}
