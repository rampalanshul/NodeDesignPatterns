import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
class BIT{
    public static void main(String args[])throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t--> 0){
            int sec = Integer.parseInt(br.readLine());
            if(sec < 29){
                if(sec < 3)
                    System.out.println("1 0 0");
                else if ((sec >=3) &&(sec < 12))
                    System.out.println("0 1 0");
                else
                    System.out.println("0 0 1");
            }
            else{
                int quo = sec/29;
                int rem = sec%29;
                if (rem < 3)
                    System.out.println(Math.pow(2,quo)+" "+0+" "+0);
                else if ((rem > 2) &&(rem <=11))
                    System.out.println(0+" "+Math.pow(2,quo)+" "+0);
                else if ((rem >=12) &&(rem <= 28))
                    System.out.println(0+" "+0+" "+Math.pow(2,quo));
            }
        }
    }
}