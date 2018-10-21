t = int(input())

while t>0:
    n = int(input())
    spread = [int(x) for x in input().split(' ')]
    # print(spread)
    if spread[0]< n:
        sum =[0]*n
        i = 1
        sum[0] = spread[0]
        while i<n:
            sum[i] = sum[i-1]+spread[i]
            i += 1
        # print(sum)
        days = 0
        jump = 0
        i = 0
        while i < n-1:
            jump = sum[i]
            i += jump
            # print("i:",i,"jump:",jump)
            days += 1
        print(days)
    else:
        print(1)
    t -= 1