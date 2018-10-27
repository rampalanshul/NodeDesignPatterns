t = int(input())
while t>0:
    n = int(input())
    skills = [int(x) for x in input().split(" ")]
    skills.sort()
    min = 999999
    for i in range(1,n):
        if min > skills[i]-skills[i-1]:
            min = skills[i]-skills[i-1]
    print(min)
    t -= 1

