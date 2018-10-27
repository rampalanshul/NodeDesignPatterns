t = int(input())
while t > 0:
    x,y,z = [int(x) for x in input().split(" ")]
    if x+y-z==0:
        print("yes")
    elif x+z-y==0:
        print("yes")
    elif y+z-x==0:
        print("yes")
    else:
        print("no")
    t -= 1