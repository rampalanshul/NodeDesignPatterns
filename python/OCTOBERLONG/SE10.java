import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
 
 
class SE10 {
    public static void main(String args[]) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while(t-->0){
            int n = Integer.parseInt(br.readLine());
            String s[]= br.readLine().split(" ");
            int prices[] = new int[n];
            for(int i=0;i<n;i++){
                prices[i]=Integer.parseInt(s[i]);
            }
            int count =1;
            for(int i=1;i<n;i++){
                boolean isGood = true;
                for(int j=i-1;j>-1 && j>=i-5;j--){
                    if(prices[i]>=prices[j]){
                        isGood=false;
                        break;
                    }
                }
                if(isGood) count++;
            }
            System.out.println(count);
        }
    }
}