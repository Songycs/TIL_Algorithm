---------------------------------------
### `입국심사` 

  - [출처링크]  (https://programmers.co.kr/learn/courses/30/lessons/43238)
  
![image](https://user-images.githubusercontent.com/15559593/136810680-eed904a0-790f-4aa6-a7a7-92c7e4244d82.png)

  - `구현코드`

    ```Python
      def solution(n, times):
          answer = 0
          left,right = 1, max(times)*n


          while left<=right:
              mid = (left+right)//2
              people = 0
              for time in times:
                  people += mid//time
                  if people>=n:
                      break
              if people>=n:
                  answer=mid
                  right = mid-1
              elif people<n:
                  left = mid+1

          answer = left

          return answer
    ```
    
  - `피드백`

     - 각 심사관은 심사에 매 번 같은 시간을 소모, 시간을 늘려가며 이진탐색 
     - 가장 오래 걸리는 심사관이 모든 사람을 심사하는 것이 right (가장 큰 값) 

     
---------------------------------------
