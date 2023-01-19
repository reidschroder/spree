
import java.util.*;
 class GFG {
    public static void main(String args[])
    {

        String[] strArr = { "PQRS", "AB", "ABB", "RSTUVW", "RST", "U", "UVWXY", "OUJBG" };
        System.out.println("Sorting array strings = ");
        Arrays.sort(strArr , (str1, str2) -> str1.charAt(0) - str2.charAt(0));
        Arrays.asList(strArr).forEach(System.out::println);


        System.out.println("BREAK POINT " );
        char letter = 'U';
        for( int i = 0; i < strArr.length; i++)
        {
          for(int j = 0 ; j < strArr[i].length(); j++)
              if( strArr[i].charAt(j) == letter)
            strArr[i].charAt(j);
            System.out.println(strArr[i]);
        }

    }
}
//