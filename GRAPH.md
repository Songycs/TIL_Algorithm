**Graph (그래프 알고리즘)**  
- 그래프는 정점과 간선으로 이루어진 자료구조, 정확히는 정점(Vertex)간의 관계를 표현하는 조직도
- 네트워크 모델과 같이 객체간의 관계를 유연성있게 표현할 수 있음 
- 순회하는 방식에 있어서 DFS/BFS등의 순회알고리즘과도 관련이 깊음

- `용어`
  - 정점(vertice) : 노드(node)라고도 하며 정점에는 데이터가 저장
  - 간선(edge): 링크(arcs)라고도 하며 노드간의 관계
  - 인접 정점(adjacent vertex) : 간선에 의해 연결된 정점
  - 단순 경로(simple-path): 경로 중 반복되는 정점이 없는것
  - 차수(degree): 무방향 그래프에서 하나의 정점에 인접한 정점의 수
  - 진출 차수(out-degree) : 방향그래프에서 사용되는 용어로 한 노드에서 외부로 향하는 간선의 수
  - 진입차수(in-degree) : 방향그래프에서 사용되는 용어로 외부 노드에서 들어오는 간선의 수
  - 무방향 그래프 vs 방향 그래프
  - 가중치
  - 완전 그래프 : 모든 정점이 연결

- `표현방식`
  - 인접 행렬 그래프 (1,0)
      - 모든정보를 저장한다 (불 필요한 정보도 저장, 그래프가 커지면 메모리 초과)
      - 직관적, 구현이 쉬움
      - 2차원 int배열을 주로 사용함
      - 무방향 그래프는 대각선(자기자신)을 기준으로 대칭된다
      - 시간(O(N)), 공간(O(n2))
  - 인접 리스트 그래프
      - 필요한 정보만 저장 ( 메모리 절약 가능 )
      - 구현의 어려움
      - list, vector등의 자료형을 이용한 2차원 배열으로 구현
      - 탐색에 O(N)


- `tree traversal` ( 트리는 그래프의 한 형태, 루트+In-degree 1 )
  - Preorder Traversal ( 전위 순회 )
      - self -> 왼쪽 자식 -> 오른쪽 자식
  - Inorder Traversal ( 중위 순회 )
      - 왼쪽자식 -> self -> 오른쪽 자식
  - Postorder Traversal ( 후위 순회 )
      - 왼쪽자식 -> 오른쪽 자식 -> self
  - Levelorder Traversal ( 레벨 순회)
      - depth단위로 탐색, BFS유사


---------------------------------------
### `탐색 기법`

 - `BFS`
    - 너비우선탐색, 자신과 연결된 주변 정점 우선
    - 깊이가 높은 그래프에 대해 고성능(너비가 넓으면 낮은성능)
    - 주로 큐
    - Levelorder Traversal
 
 - `DFS`
   - 깊이 우선탐색, 연결된 정점을 선택해, 정점과 연결된 모든 정점을 파고들어 탐색
   - 넓이가 넓은 그래프에 대해 높은 성능(깊이가 깊으면 낮은 성능)
   - 주로 스택
   - Inorder traversal

   
 - `다익스트라`
   - 한 정점 -> 모든 정점의 최단경로를 탐색(BFS + 최단경로)
   - 음의 가중치에서 사용 불가
   - BFS의 응용 ( 최소힙으로 최적화 시 O(E+VlogV)
   - greedy

 - `플로이드워셜`
   - 모든 정점 -> 모든 정점
   - 단순 O(v3)

 - `탐색 유형` 
    - ![image](https://user-images.githubusercontent.com/15559593/131234254-db675d2f-7815-45f3-afd0-b320f34923a4.png)

    - 미로 탐색 유형
      - (0,0) -> (8,8) 등 갈 수 있나? ->  BFS, DFS
      - 최단거리 ? -> 다익스트라 , 플로이드 워셜
      - 지도나 그림을 보는 느낌
    - 정점 탐색 유형
      - A->D 갈 수 있나? -> BFS, DFS
      - 최단거리는 ? -> 다익스트라, 플로이드워셜


---------------------------------------
### `Dijkstra` 

  - `배달`

  - ![image](https://user-images.githubusercontent.com/15559593/132130114-82847bff-3cdf-4f1c-a6a6-d3ee31514802.png)
  
  - `구현코드`
  ```Python
      import heapq
      def solution(N, road, K):
          INF = int(1e9)
          global distance
          distance = [INF] * (N+1)
          global graph
          graph = [[] for i in range(N+1)]
          for a,b,c in road:
              graph[a].append((b,c))
              graph[b].append((a,c))
          dijkstra(1)
          return len([x for x in distance if x<=K])

      def dijkstra(start):
          q = []
          heapq.heappush(q,(0,start))
          distance[start] = 0
          while q:
              dist, now = heapq.heappop(q)
              if distance[now] < dist:
                  continue
              for i in graph[now]:
                  cost = dist + i[1]
                  if cost < distance[i[0]]:
                      distance[i[0]] = cost
                      heapq.heappush(q,(cost,i[0]))
    ```
   - `시행착오`
      - graph를 만드는 과정에서 주어지는 무방향 그래프인것을 고려하지않아 한방향만 추가해서 실패를 했었음
      
---------------------------------------
### `Kruscal`
---------------------------------------
### `floyd-warshall ` 
---------------------------------------
### `출처` 
 - 탐색유형(https://m.blog.naver.com/occidere/220923695595)
    
