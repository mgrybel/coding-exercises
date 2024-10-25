package strings.SwapStrings2;

// Write a program to swap two strings using a temp variable.
// Input: Hello World
// Output: World Hello
public class SwapStrings2 {
    public static void main(String[] args) {
        String string1 = "Hello";
        String string2 = "World";
        String temp;

        temp = string1;
        string1 = string2;
        string2 = temp;

        System.out.println(string1);
        System.out.println(string2);
    }
}
