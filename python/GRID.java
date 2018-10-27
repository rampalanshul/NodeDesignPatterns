import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

class GRID{
    public static void main(String args[])throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while (t--> 0){
            String s[] = br.readLine().split(" ");
            int n =Integer.parseInt(s[0]);
            int m = Integer.parseInt(s[1]);
            int grid[][] = new int[n][m];
            int cc = 0;
            int row = 0;
            for(int i=0;i<n;i++){
                String str = br.readLine();
                for(int col=0;col<m;col++){
                    if(str.charAt(col)=='.'){
                        grid[row][col]=1;
                        cc++;
                    }
                    else grid[row][col] = 3;

                }
                row++;
            }
             int bcc= (n*m)-cc;
            for(int r=0;r<n-1;r++){
                for(int c=0;c<m-1;c++){
                    if((grid[r][c]==1||grid[r][c]==2)&& grid[r+1][c]!=3 && grid[r][c+1]!=3 &&grid[r+1][c+1]!=3){
                        if(grid[r+1][c]!=2){
                            grid[r+1][c]=2;
                            cc--;
                        }
                        if(grid[r][c+1]!=2){
                                grid[r][c+1]=2;
                                cc--;
                        }
                        if(grid[r+1][c+1]!=2){
                                    grid[r+1][c+1]=2;
                                    cc--;   
                        }
                        if(grid[r][c]!=2){
                                    grid[r][c]=2;
                                    cc--;
                        }
                    }
                }
            }
            if(cc==0&&bcc!=n*m) System.out.println("YES");
            else System.out.println("NO");
        }
    }
}