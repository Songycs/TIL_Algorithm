---------------------------------------
### `네트워크` 

  - [출처링크](https://programmers.co.kr/learn/courses/30/lessons/43162)
  
![image](https://user-images.githubusercontent.com/15559593/133628532-dc156457-da87-4225-9d51-4bbd22d84c2e.png)


  - `구현코드`

    ```Python
        def solution(n, computers):
            visited = [False] * n
            count = 0

            def bfs(graph, start, visited):
                queue = deque([start])
                visited[start] = True
                while queue:
                    v = queue.popleft()
                    for i in range(n):
                        if not visited[i] and computers[v][i]==1:
                            queue.append(i)
                            visited[i] = True

            for i in range(n):
                if visited[i]==0:
                    bfs(computers,  i, visited)
                    count+=1

            return count
    ```
    
   - `다른풀이`

     ```Python
        def solution(n, computers):
            temp = []
            for i in range(n):
                temp.append(i)
            for i in range(n):
                for j in range(n):
                    if computers[i][j]:
                        for k in range(n):
                            if temp[k] == temp[i]:
                                temp[k] = temp[j]
            return len(set(temp))
    ```  
    
  - `피드백`

     - bfs로 연결된 그래프를 찾았고, 모든 노드에 대해 방문이 안되었으면 그 노드로부터 새롭게 bfs를 수행하고, count를 추가했다
     - 플로이드 워셜로도 풀이가 가능하다. temp의 중복된 숫자는 같은 네트워크를 의미하므로, set으로 네트워크 개수를 세었다.
     
---------------------------------------
