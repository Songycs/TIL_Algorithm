---------------------------------------
### `합승 택시 요금` 

  - [출처링크](https://programmers.co.kr/learn/courses/30/lessons/72413)
  
![image](https://user-images.githubusercontent.com/15559593/132881260-21f538f7-df42-414b-abcd-90e64eab2318.png)

  - `구현코드`
  ```Python
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
  ```
  
  - `피드백`
    - 하나의 케이스에서 효율성이 실패해서 삼중 반복문에서 min함수를 간단히 조건문으로 수정했다
    - 다익스트라로도 풀이할 수 있을 듯하다 (우선순위를 두어서 구현하면 플로이드워셜보다 더 효율적일 것으로 추정)
     
---------------------------------------
