---------------------------------------
### `단속카메라` 

  - [출처링크]  (https://programmers.co.kr/learn/courses/30/lessons/42884)
  
![image](https://user-images.githubusercontent.com/15559593/136809930-413bd1b1-bf2e-4802-b410-112c64ab2fbc.png)

  - `구현코드`

    ```Python
      def solution(routes):
          answer = 0
          routes.sort(key=lambda x: x[1])
          right = -30001

          for route in routes:
              if right < route[0]:
                  answer += 1
                  right = route[1]
          return answer
    ```

  - `피드백`

     - 첫 시도로 범위의 포함관계에 따라 좌우 boundary를 저장하면서 문제 풀이를 시도 -> 실패
     - greedy로 문제해결 고민, '차가 나가는시간(right)'이 구현의 중심
     
---------------------------------------
