---------------------------------------
### `등굣길` 

  - [출처링크]  (https://programmers.co.kr/learn/courses/30/lessons/42898)
  
![image](https://user-images.githubusercontent.com/15559593/136971974-b659e55d-a179-410c-a7ff-fd7cc0112758.png)

  - `구현코드`

    ```Python
      def solution(m, n, puddles):

          map_graph = [[0]*(m+1) for _ in range(n+1)]

          map_graph[1][1] = 1

          for i in range(1,n+1):
              for j in range(1,m+1):
                  if i==1 and j==1:
                      continue
                  if  [j,i] in puddles:
                      continue
                  else: 
                      map_graph[i][j]=(map_graph[i-1][j]+map_graph[i][j-1])%1000000007

          return map_graph[n][m]%1000000007
    ```

  - `피드백`

     - 간단히 구현하려고 M x N 대신 M+1 X N+1로 지도를 구현하였음
     - 맨 위의 행, 맨 왼쪽의 열 등의 조건을 걸지 않고 구현
     - 행과 열을 나타내는 값을 재확인하지않아 시간을 더 들였다. 주의요망 ex) if [j,i] in puddles:
---------------------------------------
