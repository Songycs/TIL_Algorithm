---------------------------------------
### `가장 먼 노드` 

  - [출처링크](https://programmers.co.kr/learn/courses/30/lessons/49189)
  
  ![image](https://user-images.githubusercontent.com/15559593/132358182-4be162e2-76b7-45d6-bf05-deac2a3b2466.png)

  - `구현코드`
  ```Python
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
  ```
  
  - `시행착오`
     - 거리가 1인 간선들로 저장하여 다익스트라를 구현하였고
     - 간선 최소값을 매번 뽑아주기위해 heap을 사용하였다
     - 양방향임을 고려하여 edge를 추가해주었음 
     
---------------------------------------
