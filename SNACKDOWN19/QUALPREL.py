t = int(input())
score = []

def binarySearch(low,high,item):
    if low>high:
        return low
    mid = (low+high)//2
    if item < score[mid]:
        return binarySearch(mid+1,high,item)
    else:
        return binarySearch(low,mid-1,item)

while t>0:
    n,k = (int(x) for x in input().split(' '))
    # print(n,k)
    score = list(map(int,input().split(' ')))
    score.sort(reverse=True);
    index = binarySearch(0,len(score)-1,score[k-1]-0.1)
    print(index)
    t -= 1 


