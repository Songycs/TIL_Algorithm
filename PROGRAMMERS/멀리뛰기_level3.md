---------------------------------------
### `멀리뛰기` 

  - [출처링크](https://programmers.co.kr/learn/courses/30/lessons/12914)
  

![image](https://user-images.githubusercontent.com/15559593/133281325-77cafc5c-e998-4cf2-9a4b-5c010e91529b.png)


  - `구현코드`

    ```Python
        def solution(n):

            a=1
            b=1
            for i in range(n):
                a,b = b, (a+b)%1234567
            return a
    ```
    
  - `피드백`

     - 간단한 DP문제였다. 해석해보면 피보나치인 문제
     - 하지만 피보나치를 메모이제이션(공간도 O(N),반복문 방식으로 구현했을 때, O(N)
     
---------------------------------------
