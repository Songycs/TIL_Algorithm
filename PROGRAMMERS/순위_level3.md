---------------------------------------
### `순위` 

  - [출처링크]  (https://programmers.co.kr/learn/courses/30/lessons/49191)
  
![image](https://user-images.githubusercontent.com/15559593/136811391-7726ffe1-ffcf-486a-9095-8ebf5cd55004.png)

  - `구현코드`

    ```Python
      def solution(n, results):
      answer = 0
      graph = [[1e9]*(n+1) for _ in range(n+1)]
      for i in range(1,n+1):
          graph[i][i]=0
      for result in results:
          a,b = result
          graph[a][b]=1

      for k in range(1,n+1):
          for a in range(1,n+1):
              for b in range(1,n+1):
                  graph[a][b] = min(graph[a][b],graph[a][k]+graph[k][b])

      for i in range(1,n+1):
          count=0
          for j in range(1,n+1):
              if graph[i][j]!=1e9 or graph[j][i]!=1e9:
                  count+=1
          if count==n:
              answer+=1

      return answer
    ```

    
  - `피드백`

     - 플로이드워셜 알고리즘의 응용 예시(닿을 수 있는가)
     
---------------------------------------
