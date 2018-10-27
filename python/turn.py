tc = int(input())

while tc>0:
    p1,p2,k = (int(x) for x in input().split())
    if ((p1+p2)//k)%2==0:
        print("CHEF")
    elif ((p1+p2)//k)%2 != 0:
        print("COOK");
    tc -= 1


 
# print(p1,p2,k)