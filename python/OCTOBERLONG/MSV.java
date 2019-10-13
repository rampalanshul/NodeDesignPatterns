import java.io.*;

class MSV {

    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int t = Integer.parseInt(br.readLine());
        while(t-->0){
            int n = Integer.parseInt(br.readLine());
            int a[]=new int[n];
            int index[] = new int[1000001];
            int count[] = new int[1000001];
            String s [] = br.readLine().split(" ");
            for(int i=0;i<n;i++){
                a[i]=Integer.parseInt(s[i]);
                index[a[i]] = i;
            }
            for(int k=0;k<n-1;k++) {
                if(a[k]==1&& k > 0) count[a[k]] = k;
                for (int i = 2; i <= Math.sqrt(a[k]);i++) {
                    if (a[k] % i == 0) {
                        if(index[i] > k)
                            count[i]++;
                        if (a[k] / i != i && k < index[a[k] / i])
                            count[a[k] / i]++;
                    }
                }
                if(index[a[k]]>k) count[a[k]]++;
            }
            int max = 0;
            for (int i = 0; i <n ; i++) 
                if(count[a[i]] > max) max = count[a[i]];
            System.out.println(max);
        }

    }

}
