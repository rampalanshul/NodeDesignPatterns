import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
 
class SAKTRAN {
    public static void main(String args[])throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while(t-->0){
            int n ,m ,q;
            String []s = br.readLine().split(" ");
            n = Integer.parseInt(s[0]);
            m = Integer.parseInt(s[1]);
            q = Integer.parseInt(s[2]);
            int rows[] = new int[n];
            int cols[] = new int[m];
            while(q-->0){
                int X,Y;s = br.readLine().split(" ");
                X= Integer.parseInt(s[0]);
                Y = Integer.parseInt(s[1]);
                rows[X-1]+=1;
                cols[Y-1]+=1;
            }
            long ro=0,re=0,ce=0,co=0;
            for(int i=0;i<n;i++){
                if(rows[i]%2==0) re++;
                else ro++;
            }
            for(int j=0;j<m;j++){
                if(cols[j]%2==0) ce++;
                else co++;     
            }
            System.out.println(ro*ce+co*re);
        }
    }
 
}