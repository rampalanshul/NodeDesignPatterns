
# test case
tc = int(input())
while tc > 0:
    sec = int(input())
    #sec -= 1
    if sec < 27:
        if sec <= 3:
            print("1 0 0")
        elif sec >=4 and sec <= 10:
            print("0 1 0")
        else:
            print("0 0 1")
    else:
        quo = sec//26
        rem = sec%26
        if rem <=2:
            print(2**quo,0,0)
        elif rem >= 3 and rem <=10:
            print(0,2**quo,0)
        else:
            print(0,0,2**quo)
    tc -= 1
