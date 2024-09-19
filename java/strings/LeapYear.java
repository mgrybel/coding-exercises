package strings;

// Write a program that checks whether
// the year is leap or not.
// Input: 2020
// Output: Leap
public class LeapYear {
    public static boolean isLeap(int year) {
        if (year % 4 == 0) {
            if (year % 100 == 0) {
                if (year % 400 == 0) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    public static void main(String[] args) {
        if (isLeap(2020)) {
            System.out.println("Leap");
        } else {
            System.out.println("Not Leap");
        }
    }
}
