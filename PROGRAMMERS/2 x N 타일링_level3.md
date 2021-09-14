---------------------------------------
### `2 X N 타일링` 

  - [출처링크](https://programmers.co.kr/learn/courses/30/lessons/12900)
  
![image](https://user-images.githubusercontent.com/15559593/133280588-e70982fe-0189-400a-8764-884b2e316e91.png)


  - `구현코드`

    ```Python
        def solution(n):

            a = [0] * (n+1)
            a[1] = 1
            a[2] = 2
            for i in range(3,n+1):
                a[i] = (a[i-1]+a[i-2])%1000000007

            return a[n] 
    ```
    
   - `다른풀이(부분)`

     ```Python
        if n<3:
            return n
        a = 1
        b = 1
        for _ in range(0,n):
            a , b = b, a+b
        return a%1000000007
    ```  
    
  - `피드백`

     - 간단한 DP문제였다. 해석해보면 피보나치인 문제
     - 하지만 피보나치를 메모이제이션(공간도 O(N),반복문 방식으로 구현했을 때, O(N)
     
---------------------------------------
