#snackdown19 prelem Round A
#solution to problem Typing
t = int(input())
while t > 0:
    n = int(input())
    cache = {}
    total = 0
    while n > 0:
        string = input()
        #print(string)
        if string in cache:
            total += cache[string]/2
        else:
            time = 0
            for i in range(0,len(string)):
                if i ==0:
                    time = 0.2
                else:
                    if ((string[i]=='d' or string[i]=='f') and (string[i-1]=='d' or string[i-1] =='f')):
                        time += 0.4
                    elif ((string[i]=='d' or string[i]=='f') and (string[i-1]=='j' or string[i-1]=='k')):
                        time += 0.2
                    elif ((string[i]=='j' or string[i]=='k') and (string[i-1]=='j' or string[i-1]=='k')):
                        time += 0.4
                    else:
                        time += 0.2
            cache[string] = time
            #print(time)
            total += time
        n -= 1
    print(round(total/0.1))
    t -= 1
