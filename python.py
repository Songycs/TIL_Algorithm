#Enumerate

#Zip 길이는 짧은것 기준
for pair in zip(numbers, letters):

pairs = list(zip(numbers, letters))

#unzip
numbers, letters = zip(*pairs)
# numbers:(1,2,3)
dict(zip(keys,values))
#Set
s.remove(v)
s.add(v)
s.update([])
i|j  or  i.union(j)
i&j or i.intersection(j)
i-j or i.difference(j)
i^j or i.symmetric_difference(j)
i.isdisjoint(j)

#dictionary
dict.keys()
dict.values()
dict.items()#둘다
dict.get('key') # none if not exist
del dict['key']
dict.clear()
from collections import defaultdict #
int dic_int = defaultdict(int)
dic_int['key'] # 0 #
list dic_list = defaultdict(list) dic_list['key']
dic_int['key2'] = '명시적인 값 지정하면 변경됨'
dic_int
# # defaultdict(int, {'key': 0, 'key2': '명시적인 값 지정하면 변경됨'})
set dic_set = defaultdict(set)

# heap
import heapq
heapq.heapify(배열)
heapq.heappush(h, v)
heapq.heappop(h)

#Counter
counter = Counter('string' or list)
counter.most_common() #많이나온순
counter.most_common() #가장많이 나온

#Bisect
from bisect import bisect_right, bisect_left
bisect_left(a, x)
bisect_right(a, x)
def count_by_range(a, left_value, right_value):
    rindex = bisect_right(a, right_value)
    lindex = bisect_left(a, left_value)
    return rindex-lindex

#zfill(앞채우기), rjust(앞채우기),ljust(뒤채우기), center(양옆)
#format활용가능

value.zfill(num)


#union find
def find_parent(parent, x):
    if parent[x] != x:
        parent[x] = find_parent(parent, parent[x])
    return parent[x]
def union_parent(parent, a, b):
    a = find_parent(parent, a)
    b = find_parent(parent, b)
    if a < b:
        parent[b] = a
    else:
        parent[a] = b
v, e = map(int, input().split())
parent = [0] * (v + 1)

for i in range(1, v + 1):
    parent[i] = i

for i in range(e):
    a, b = map(int, input().split())
    union_parent(parent, a, b)

print('각 원소가 속한 집합: ', end='')
for i in range(1, v + 1):
    print(find_parent(parent, i), end=' ')

for i in range(1, v + 1):
    print(parent[i], end=' ')

for i in range(e):
  a, b = map(int, input().split())
  # 사이클이 발생한 경우 종료
  if find_parent(parent, a) == find_parent(parent, b):
      cycle = True
      break
  # 사이클이 발생하지 않았다면 합집합(Union) 연산 수행
  else:
      union_parent(parent, a, b)

#크루스칼

edges = []
total_cost = 0

for _ in range(e):
    a, b, cost = map(int, input().split())
    edges.append((cost, a, b))

edges.sort()

for i in range(e):
    cost, a, b = edges[i]
    if find_parent(parent, a) != find_parent(parent, b):
        union_parent(parent, a, b)
        total_cost += cost


# 위상정렬
#1 인접행렬
def topological_sort(adj_mat):
    in_degrees = []
    stack = []
    answer = []

    for i in range(len(adj_mat)):
        temp = 0
        for col in range(len(adj_mat)):
            temp += adj_mat[col][i]
        in_degrees.append(temp)

    for i in range(len(in_degrees)):
        if in_degrees[i] == 0:
            stack.append(i)

    while stack:
        node = stack.pop()
        answer.append(node)
        for i in range(len(adj_mat[node])):
            if adj_mat[node][i] != 0:
                in_degrees[i] -= 1
                if in_degrees[i] == 0:
                    stack.append(i)
#2 인접리스트
def topological_sort_stack(adj_list):
    stack = []
    in_degree = [0] * len(adj_list)
    answer = []

    for i in range(len(adj_list)):
        for j in range(len(adj_list)):
            temp = adj_list[j]
            for k in range(len(temp)):
                if temp[k] == i:
                    in_degree[i] += 1

    for i in range(len(in_degree)):
        if in_degree[i] == 0:
            stack.append(i)

    while stack:
        node = stack.pop()
        answer.append(node)
        for i in range(len(adj_list[node])):
            idx = adj_list[node][i]
            in_degree[idx] -= 1
            if in_degree[idx] == 0:
                stack.append(idx)

#큐
from collections import deque
v, e = map(int, input().split())
indegree = [0] * (v + 1)
graph = [[] for i in range(v + 1)]

for _ in range(e):
    a, b = map(int, input().split())
    graph[a].append(b)
    indegree[b] += 1
def topology_sort():
    result = []
    q = deque()

    for i in range(1, v + 1):
        if indegree[i] == 0:
            q.append(i)

    while q:
        now = q.popleft()
        result.append(now)
        for i in graph[now]:
            indegree[i] -= 1
            if indegree[i] == 0:
                q.append(i)

    for i in result:
        print(i, end=' ')

topology_sort()




#다익스트라

graph = [[] for _ in range(n+1)]
visited = [False] * (n+1)  # 방문처리
distance = [INF] * (n+1)   # 거리

for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a].append((b, c))

def get_smallest_node():
    min_value = INF
    index = 0
    for i in range(1, n+1):
        if not visited[i] and distance[i] < min_value:
            min_value = distance[i]
            index = i
    return index

def dijkstra(start):
    distance[start] = 0
    visited[start] = True
    for i in graph[start]:
        distance[i[0]] = i[1]

    for _ in range(n-1):
        now = get_smallest_node()
        visited[now] = True
        for next in graph[now]:
            cost = distance[now] + next[1]
            if cost < distance[next[0]]:
                distance[next[0]] = cost

dijkstra(start)

for i in range(1, n+1):
    if distance[i] == INF:
        print('도달 할 수 없음')
    else:
        print(distance[i])
# 가장 먼 노드
import heapq
INF = int(1e9)

def solution(n, vertex):
    graph = [[] for i in range(n+1)]
    distance = [INF] * (n+1)
    for edge in vertex:
        graph[edge[0]].append([edge[1],1])
        graph[edge[1]].append([edge[0],1])
    def dijkstra(start):
        q = []
        heapq.heappush(q,(0,start))
        distance[start] = 0
        while q:
            dist, now = heapq.heappop(q)
            if distance[now] < dist:
                continue
            for i in graph[now]:
                cost = dist + 1
                if cost < distance[i[0]]:
                    distance[i[0]] = cost
                    heapq.heappush(q,(cost,i[0]))
    dijkstra(1)
    distanceSet = set(distance)
    return distance.count(sorted(distanceSet,reverse=True)[1])

# 우선순위 큐
def dijkstra(start):
    q = []
    heapq.heappush(q, (0, start))  # 시작노드 정보 우선순위 큐에 삽입
    distance[start] = 0            # 시작노드->시작노드 거리 기록
    while q:
        dist, node = heapq.heappop(q)
        # 큐에서 뽑아낸 거리가 이미 갱신된 거리보다 클 경우(=방문한 셈) 무시
        if distance[node] < dist:
            continue
        # 큐에서 뽑아낸 노드와 연결된 인접노드들 탐색
        for next in graph[node]:
            cost = distance[node] + next[1]   # 시작->node거리 + node->node의인접노드 거리
            if cost < distance[next[0]]:      # cost < 시작->node의인접노드 거리
                distance[next[0]] = cost
                heapq.heappush(q, (cost, next[0]))


#벨만포드
def bellman_ford(graph, start):
    distance, predecessor = dict(), dict()  # 거리 값, 각 정점의 이전 정점을 저장할 딕셔너리
    # 거리 값을 모두 무한대로 초기화 / 이전 정점은 None으로 초기화
    for node in graph:
        distance[node], predecessor[node] = float('inf'), None
    distance[start] = 0  # 시작 정점 거리는 0

    # 간선 개수(V-1)만큼 반복
    for _ in range(len(graph) - 1):
        for node in graph:
            for neighbour in graph[node]:  # 각 정점마다 모든 인접 정점들을 탐색
                # (기존 인접 정점까지의 거리 > 기존 현재 정점까지 거리 + 현재 정점부터 인접 정점까지 거리)인 경우 갱신
                if distance[neighbour] > distance[node] + graph[node][neighbour]:
                    distance[neighbour] = distance[node] + graph[node][neighbour]
                    predecessor[neighbour] = node

    # 음수 사이클 존재 여부 검사 : V-1번 반복 이후에도 갱신할 거리 값이 존재한다면 음수 사이클 존재
    for node in graph:
        for neighbour in graph[node]:
            if distance[neighbour] > distance[node] + graph[node][neighbour]:
                return -1, "그래프에 음수 사이클이 존재합니다."

    return distance, predecessor

#플로이드 워셜
INF = int(1e9) # 무한을 의미하는 값으로 10억을 설정

graph = [[INF] * (n + 1) for _ in range(n + 1)]

for a in range(1, n + 1):
    for b in range(1, n + 1):
        if a == b:
            graph[a][b] = 0

for _ in range(m):
    a, b, c = map(int, input().split())
    graph[a][b] = c

for k in range(1, n + 1):
    for a in range(1, n + 1):
        for b in range(1, n + 1):
            graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])

# 수행된 결과를 출력
for a in range(1, n + 1):
    for b in range(1, n + 1):
        if graph[a][b] == 1e9:
            print("INFINITY", end=" ")
        # 도달할 수 있는 경우 거리를 출력
        else:
            print(graph[a][b], end=" ")
    print()

# 택시 합승요금
def solution(n, s, a, b, fares):
    INF = int(1e9)
    graph = [[INF]*(n+1) for _ in range(n+1)]

    for i in range(1,n+1):
        graph[i][i]=0

    for fare in fares:
        graph[fare[0]][fare[1]]=fare[2]
        graph[fare[1]][fare[0]]=fare[2]

    for k in range(1,n+1):
        for i in range(1,n+1):
            for j in range(1,n+1):
                if graph[i][j] > graph[i][k]+graph[k][j]:
                    graph[i][j] = graph[i][k]+graph[k][j]
    min_fee = INF

    for i in range(1,n+1):
        min_fee = min(min_fee, graph[s][i]+graph[i][a]+graph[i][b])

    return min_fee



#순열
def permute(arr):
    result = [arr[:]]
    c = [0] * len(arr)
    i = 0
    while i < len(arr):
        if c[i] < i:
            if i % 2 == 0:
                arr[0], arr[i] = arr[i], arr[0]
            else:
                arr[c[i]], arr[i] = arr[i], arr[c[i]]
            result.append(arr[:])
            c[i] += 1
            i = 0
        else:
            c[i] = 0
            i += 1
    return result
import itertools

pool = ['A', 'B', 'C']
print(list(map(''.join, itertools.permutations(pool)))) #전체
print(list(map(''.join, itertools.permutations(pool, 2))))


# 순열 dfs
l = ['a', 'b', 'c']
visited = [0 for _ in range(len(l))]
answer = []

def dfs(cnt, list):
    if cnt == len(l):
        answer.append(list[:])
        return

    for i, val in enumerate(l):
        if visited[i] == 1:
            continue
        list.append(val)
        visited[i] = 1

        dfs(cnt+1, list)
        # 방금 전 list에 추가한 값과 방문 한 것을 되돌려주기
        list.pop()
        visited[i] = 0


dfs(0, [])
print(answer)

#조합
from itertools import combinations

for i in combinations([1,2,3,4], 2):
    print(i, end=" ")

#중복순열
from itertools import product
product(반복 가능한 객체, repeat=1)

#중복조합
from itertools import combinations_with_replacement

for cwr in combinations_with_replacement([1,2,3,4], 2):
    print(cwr, end=" ")


#이진탐색
def binary_search(target, data):
    data.sort()
    start = 0
    end = len(data) - 1

    while start <= end:
        mid = (start + end) // 2

        if data[mid] == target:
            return mid # 함수를 끝내버린다.
        elif data[mid] < target:
            start = mid + 1
        else:
            end = mid -1

    return None

#재귀 ver
def binary_search_recursion(target, start, end, data):
    if start > end:
        return None

    mid = (start + end) // 2

    if data[mid] == target:
        return mid
    elif data[mid] > target:
        end = mid - 1
    else:
        start = mid + 1

    return binary_search_recursion(target, start, end, data)


# 회문
word = input()
if str(word) == str(word)[::-1] :
    print("Palindrome")
else:
    print("Not Palindrome")

word = input()
if str(word) == "".join(reversed(word)) :
    print("Palindrome")
else:
    print("Not Palindrome")

#팰린드롬
def is_palindrome(word):
    list_word = list(word)
    for i in range(0, len(list_word) // 2):

        if list_word[i] == list_word[len(list_word) - 1 - i]:
            continue
        else:
            return False

    return True


#편집거리 알고리즘
n = len(str1)
m = len(str2)
dp = [[0] * (1+m) for _ in range(1+n)]
for i in range(1, n+1):
  dp[i][0] = i
for j in range(1, m+1):
  dp[0][j] = j
for i in range(1, n+1):
  for j in range(1, m+1):
    if str1[i-1] == str2[j-1]:
      dp[i][j] = dp[i-1][j-1]
    else:
      dp[i][j] = min(dp[i][j-1], dp[i-1][j-1], dp[i-1][j]) + 1

print(dp[n][m])


#문자열 압축
s = 'aabbbbcccd'

result = s[0]  # 첫번째 값을 결과에 넣는다
count  = 0

for st in s:
    if st == result[-1]:
        count += 1
    else:
        result += str(count) + st
        count = 1
result += str(count)

print(result)

#소수판별

def is_prime_num(n):
    for i in range(2, int(math.sqrt(n))+1):
        if n % i == 0:
            return False

    return True

#에라토스테네스의 체
import math

def is_prime_num(n):
    arr = [True] * (n + 1)

    for i in range(2, int(math.sqrt(n)+1)):
        if arr[i] == True:
            j = 2

            while (i * j) <= n:
                arr[i*j] = False
                j += 1

    return arr

arr = is_prime_num(50)

for i in range(len(arr)):
    if arr[i] == True:
        print(i, end=' ')


#부분합 left,right
n = 5
data = [10, 20, 30, 40, 50]
sum_value = 0
prefix_sum = [0]
for i in data:
    sum_value += i
    prefix_sum.append(sum_value)

left = 3
right = 4
print(prefix_sum[right] - prefix_sum[left-1])

#연속구간 최대합
def partial_sum(arr):
    arr = [0] + arr
    partial_sum = [0] * len(arr)

    for i in range(1, len(arr)):
        partial_sum[i] = partial_sum[i-1] + arr[i]

    partial_sum = partial_sum[1:]

    max_partial_sum = partial_sum[0]

    for b in range(0, len(arr)-1):
        for a in range(0, b):
            print(a, b, partial_sum[b] - partial_sum[a-1])
            max_partial_sum = max(max_partial_sum, partial_sum[b] - partial_sum[a-1])


#DP VER
def dynamic_partial_sum(arr):
    cache = [0] * len(arr)
    cache[0] = arr[0]
    for i in range(0, len(arr)):
        cache[i] = max(0, cache[i-1]) + arr[i]
    return max(cache)



#투포인터

count = 0
interval_sum = 0
end = 0
for start in range(n):
    while interval_sum < m and end < n:
        interval_sum += data[end]
        end += 1
    if interval_sum == m:
        count += 1
    interval_sum -= data[start]

#병합정렬
result = [0] * (n + m)
i = 0
j = 0
k = 0

while i < n or j < m:
    if j >= m or (i < n and a[i] <= b[j]):
        result[k] = a[i]
        i += 1
    else:
        result[k] = b[j]
        j += 1
    k += 1


#올바른 괄호
def solution():
  x = 0
  for w in s:
      if x < 0:
          break
      x = x+1 if w=="(" else x-1 if w==")" else x
  return x==0

#후위식
a=input()
stack=[]
for x in a:
    if x.isdecimal():
        stack.append(int(x))
    else:
        if x=='+':
            n1=stack.pop()
            n2=stack.pop()
            stack.append(n2+n1)
        elif x=='-':
            n1=stack.pop()
            n2=stack.pop()
            stack.append(n2-n1)
        elif x=='*':
            n1=stack.pop()
            n2=stack.pop()
            stack.append(n2*n1)
        elif x=='/':
            n1=stack.pop()
            n2=stack.pop()
            stack.append(n2/n1)
print(stack[0])



#LIS
def LIS(arr):
    if not arr:
        return 0
    ret = 1
    for i in range(len(arr)):
        nxt = []
        for j in range(i+1, len(arr)):
            if arr[i] < arr[j]:
                nxt.append(arr[j])
        ret = max(ret, 1 + lis(nxt))
    return ret

#DP
def LIS(sequence):
  length = len(sequence)
  # dp table initialize
  dp = [1] * length
  for i in range(length):
    for j in range(i):
      if sequence[i] > sequence[j]:
        dp[i] = max(dp[i], dp[j] + 1)
  return max(dp)


#이진탐색
def lis(arr):
    if not arr:
        return 0
    INF = float('inf')
    C = [INF] * (len(arr)+1)
    C[0] = -INF
    C[1] = arr[0]
    tmp_longest = 1

    def search(lo, hi, n):
        if lo == hi:
            return lo
        elif lo + 1 == hi:
            return lo if C[lo] >= n else hi

        mid = (lo + hi) // 2
        if C[mid] == n:
            return mid
        elif C[mid] < n:
            return search(mid+1, hi, n)
        else:
            return search(lo, mid, n)

    for n in arr:
        if C[tmp_longest] < n:
            tmp_longest += 1
            C[tmp_longest] = n
        else:
            next_loc = search(0, tmp_longest, n)
            C[next_loc] = n

    return tmp_longest



#자리수합
def solution(n):
    new = str(n)
    add = 0
    for i in range(len(new)):
        add += int(new[i])
    return add

def sum_digit(number):
    return sum(map(int,str(number)))



#bfs 네트워크

from collections import deque

def solution(n, computers):
    visited = [False] * n
    count = 0

    def bfs(graph, start, visited):
        queue = deque([start])
        visited[start] = True
        while queue:
            v = queue.popleft()
            for i in range(n):
                if not visited[i] and graph[v][i]==1:
                    queue.append(i)
                    visited[i] = True

    for i in range(n):
        if visited[i]==0:
            bfs(computers,  i, visited)
            count+=1

    return count

#가운데글자 가져오기
def solution(s):
    return s[(len(s)-1)//2:len(s)//2+1]

#약수의합
def solution(n):
    return n + sum([i for i in range(1, (n // 2) + 1) if n % i == 0])


#문자열 내림차순
def solution(s):
    # reverse(), reversed(), [::-1]
    # sort 메소드 : reverse=True
    return "".join(sorted(s))[::-1]


#행렬의 곱셈
def solution(arr1, arr2):
    # len(arr1) x len(arr2[0]) arr1의 행 x arr2의 열
    row_arr1 = len(arr1)
    col_arr2 = len(arr2[0])

    answer = [[0]*col_arr2 for _ in range(row_arr1)]

    for i in range(row_arr1):
        for j in range(col_arr2):
            for k in range(len(arr1[0])):
                answer[i][j] +=  arr1[i][k] * arr2[k][j]
    return answer
def solution(arr1, arr2):
  return [[sum(a*b for a, b in zip(A_row,B_col)) for B_col in zip(*B)] for A_row in A]


#피보나치
def solution(n):
    pre, next = 0, 1
    for _ in range(n):
        pre, next = next, pre + next
    return pre%1234567

#이중우선순위큐
import heapq
def solution(operations):
    q = []
    heapq.heapify(q)
    for operation in operations:
        com, num = operation.split()
        num = int(num)
        if com=='I':
            heapq.heappush(q,num)
        else:
            if num==1 and q:
                q.pop(q.index(heapq.nlargest(1, q)[0]))
            else:
                if q:
                    heapq.heappop(q)
    return [heapq.nlargest(1, q)[0], heapq.nsmallest(1, q)[0]] if q else [0,0]




  #bfs 단어변환

def solution(begin, target, words):
    if target not in words:
        return 0
    queue = deque()
    queue.append([begin,0])
    while queue:
        now,depth = queue.popleft()
        temp = ""
        for word in words:
            diff = 0
            for i in range(len(word)):
                if now[i]!=word[i]: diff+=1
            if diff==1 and word == target:
                depth+=1
                return depth
            elif diff==1:
                temp = word
                queue.append(([word,depth+1]))
        words.remove(temp)
    return 0
#방문을 체크해서 동일한 탐색을 하지 않도록 수정
def solution2(begin, target, words):
    if target not in words:
        return 0
    visited = [0 for i in words]
    answer = 0
    stacks = [begin]

    while stacks:
        stack = stacks.pop()
        if stack == target:
            return answer

        for i in range(len(words)):
            if len([j for j in range(len(words[i])) if words[i][j] != stack[j]]) == 1:
                if visited[i] != 0:
                    continue
                visited[i] = 1
                stacks.append(words[i])
        answer += 1
    return answer