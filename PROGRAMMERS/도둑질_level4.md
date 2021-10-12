---------------------------------------
### `도둑질` 

  - [출처링크]  (https://programmers.co.kr/learn/courses/30/lessons/42897)
  
![image](https://user-images.githubusercontent.com/15559593/136973500-31165169-6f48-4ec7-818f-576c4aede4e3.png)

  - `구현코드`

    ```Python
      def solution(money):    
          forward = [0]*len(money)
          back = [0]*len(money)

          forward[0]= money[0]
          forward[1]= max(money[0],money[1])
          for i in range(2,len(money)-1):
              forward[i] = max(forward[i-1],forward[i-2]+money[i])

          back[-1] = money[-1]
          back[-2] = max(money[-1],money[-2])
          for j in range(len(money)-3,0,-1):
              back[j] = max(back[j+1],back[j+2]+money[j])

          return max(max(back),max(forward))
    ```
    
   - `다른풀이`

     ```Python
      def solution(a):
          x1, y1, z1 = a[0], a[1], a[0]+a[2]
          x2, y2, z2 = 0, a[1], a[2]
          for i in a[3:]:
              x1, y1, z1 = y1, z1, max(x1, y1)+i
              x2, y2, z2 = y2, z2, max(x2, y2)+i
          return max(x1, y1, y2, z2)
     ```  
    
  - `피드백`

     - 첫 집을 털었을 때, 마지막 집을 털 수 없기때문에 첫집을 선택하는 경우, 마지막집을 선택하는경우로 나눠서 구현
     - 각 경우에 최대값 중 더 큰 값을 return
     - 다른풀이의 경우 첫번째 집 선택한 경우와 선택하지 않은 경우를 나눠서 최대값 갱신
     
---------------------------------------
