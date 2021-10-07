---------------------------------------
### `프린터` 

  - [출처링크](https://programmers.co.kr/learn/courses/30/lessons/42587#)
  
![image](https://user-images.githubusercontent.com/15559593/136380300-cd56e1ee-a6fa-44ad-8f93-98699aa15997.png)


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
                  #다음 출력이 내가 요청한 문서이면
                  if loc_first == 1:
                      break;
              else:
                  queue.append(queue_first)
                  loc.append(loc_first)
          return count
    ```
    
   - `다른풀이(부분)`

     ```Python
      def solution(priorities, location):
          queue =  [(i,p) for i,p in enumerate(priorities)]
          answer = 0
          while True:
              cur = queue.pop(0)
              if any(cur[1] < q[1] for q in queue):
                  queue.append(cur)
              else:
                  answer += 1
                  if cur[0] == location:
                      return answer
     ```  
    
  - `피드백`
     - 어렵지 않은 queue활용 문제였다. 나는 대상 문서의 위치를 따로 저장했다.
     -  if any(cur[1] < q[1] for q in queue):  -> cur[1]보다 큰 다른 값이 큐에 있는가(현재의 값이 최고 우선순위인가)
     -  any라는 파이썬 내장함수를 처음알았다... 반성하고 주말에 python docs를 정독하자... 
     
---------------------------------------
