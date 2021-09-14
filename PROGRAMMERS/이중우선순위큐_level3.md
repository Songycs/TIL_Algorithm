---------------------------------------
### `이중 우선순위 큐` 

  - [출처링크](https://programmers.co.kr/learn/courses/30/lessons/42628)
  

![image](https://user-images.githubusercontent.com/15559593/133281620-7a7016ec-bf68-4e66-9748-cfe17026c9c5.png)


  - `구현코드`

    ```Python
    
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
            
    ```
    
  - `피드백`

     - 파이썬 기본 heapq 모듈은 최소힙으로 작동하는데, 문제는 최대힙도 같이 활용하는법을 요구했다.
     - heapq의 내장함수를 공부하는 계기가 되었다
     - [Python-docs. heapq](https://docs.python.org/ko/3/library/heapq.html)
---------------------------------------
