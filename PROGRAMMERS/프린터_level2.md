
---------------------------------------
### `프린터(스택/큐)` 

  - [출처링크](https://programmers.co.kr/learn/courses/30/lessons/42587)


![image](https://user-images.githubusercontent.com/15559593/132707486-46bc67e2-4c46-4bec-9de5-f7f7cfb0d53b.png)
  
  
  - `구현코드`
    ```Python
        from collections import deque
        #location -> 요청문서의 현재 위치
        def solution(priorities, location):
            queue = deque(priorities)
            loc = deque([0]*len(priorities))
            loc[location] = 1
            count = 0

            while True:
                next = max(queue)
                queue_first = queue.popleft()
                loc_first = loc.popleft()
                if queue_first == next:
                    count +=1
                    if loc_first == 1:
                        break;
                else:
                    queue.append(queue_first)
                    loc.append(loc_first)
            return count
    ```
    
  - `구현과정 및 시행착오`
 
     - 내가 출력하려는 문서의 location을 1로 놓고, 위치(순서)를 기억해주었다
     - 다음 출력 대상이 대상문서가 될때까지의 (우선순위가 가장 높고, 동시에 location이 1인 경우) 프린트과정을 count로 세어주었음 
---------------------------------------
