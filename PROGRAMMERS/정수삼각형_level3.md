---------------------------------------
### `정수삼각형` 

  - [출처링크]  (https://programmers.co.kr/learn/courses/30/lessons/43105)
  
![image](https://user-images.githubusercontent.com/15559593/136971115-e75998e8-5006-435d-bbfc-cbb33500aefc.png)


  - `구현코드`

    ```Python
      def solution(triangle):
          answer = 0
          path = [[0]*i for i in range(1,len(triangle)+1)]
          for i in range(1,len(triangle)):
              for j in range(len(triangle[i])):
                  if j==0:
                      triangle[i][j]+=triangle[i-1][j]
                  elif j==len(triangle[i])-1:
                      triangle[i][j]+=triangle[i-1][j-1]
                  else:
                      triangle[i][j] = max(triangle[i][j]+triangle[i-1][j],triangle[i][j]+triangle[i-1][j-1])
          return max(triangle[-1])
    ```
    
  - `피드백`

     - 삼각형의 최대값을 쌓아 내려가는 간단한 DP구현
     - 행 내의 숫자 위치에 따라 윗 행의 숫자를 받을 수 있는 경우의 수가 다르다(왼쪽 끝, 오른쪽 끝, 그 외)
     
---------------------------------------
