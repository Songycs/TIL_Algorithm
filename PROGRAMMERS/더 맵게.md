---------------------------------------
### `더 맵게` 
  - [출처,URL](https://programmers.co.kr/learn/courses/30/lessons/42626)


![image](https://user-images.githubusercontent.com/15559593/132354145-c376989f-e61a-41a1-9d78-3b6fe6df1101.png)


  - `구현코드`
    ```Python
    import heapq

    def solution(scoville, K):
      answer = 0
      heapq.heapify(scoville)

      while len(scoville)>1:
          min = heapq.heappop(scoville)
          sec = heapq.heappop(scoville)
          heapq.heappush(scoville,min+sec*2)
          answer += 1
          if scoville[0]>=K:
              return answer
      return -1
    ```
    
   - `시행착오`
      - 파이썬의 기본 최소힙(heapq)를 활용하여 그리 어렵지 않았음.


---------------------------------------

