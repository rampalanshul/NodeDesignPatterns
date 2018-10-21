#snackdown19 prelem Round A solution II
t = int(input())
while t>0:
    n = int(input())
    numberOnCards = [int(x) for x in input().split(" ")]
    i = 0
    j = i+1
    flag = True
    while j<n and numberOnCards[j]>=numberOnCards[j-1]:
        j += 1
    #print(j)
    if j < n and numberOnCards[i] >= numberOnCards[n-1]:
        i = j
        j = i+1
        while j < n and numberOnCards[j] >= numberOnCards[j-1]:
            j += 1
        if j <= n-1:
            flag = False
    elif j == n:
        flag = True
    else:
        flag = False
    if flag:
        print("YES" )
    else:
        print("NO")
    t -= 1 
