t = int(input())
while t>0:
    n = int(input())
    skills = [int(x) for x in input().split(" ")]
    skills.sort()
    print(skills) 
    i = n-1
    a = 0
    b = 0
    total = 0
    while i > -1:
        b = skills[i]
        count = 0 
        while skills[i] == b:
            count += 1
            i -= 1
        total += count * a
        total %= 1000000007
        a = count
    if total == 0:
        total = n*n-1
        total %= 1000000007
    print(total)

