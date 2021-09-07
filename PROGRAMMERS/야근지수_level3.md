---------------------------------------
### `야근 지수`
  -[링크](https://programmers.co.kr/learn/courses/30/lessons/12927)

  ![image](https://user-images.githubusercontent.com/15559593/132354965-1cd38c63-b313-428b-8a17-8df521ae8e0a.png)
  
  - `구현코드`
  ```Python
  import heapq

  def solution(n, works):

      heap = []
      heapq.heapify(heap)
      for work in works:
          heapq.heappush(heap,-work)

      for i in range(n):
          max_work = (-1)*heapq.heappop(heap)
          if max_work==0:
              break
          heapq.heappush(heap,-max_work+1)

      return sum([x**2 for x in heap])
  ```
  
   - `시행착오`
      - 파이썬 최소힙을 최대힙으로 활용하기위해 데이터를 -1을 곱하여 넣었다.
   
---------------------------------------
