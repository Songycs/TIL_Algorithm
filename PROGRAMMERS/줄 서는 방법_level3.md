---------------------------------------
### `줄 서는 방법` 

  - [출처링크](https://programmers.co.kr/learn/courses/30/lessons/12936)
  
![image](https://user-images.githubusercontent.com/15559593/133630007-7d81add7-fb1b-43cc-a4f6-358f7662067b.png)

  - `구현코드`
    ```Python
      import math
      def solution(n, k):
          nums = list(range(1, n+1))
          answer = []

          # 맨앞에 들어가야할 수 index를 계속 추가해줌
          while n != 0:
              temp = math.factorial(n-1)
              index, k = (k-1)//temp, k%temp
              answer.append(nums.pop(index))
              n -= 1
          return answer
    ```

  - `피드백`
     - 수학적으로 생각해서 구현하는 문제였다.
     - 하나의 맨 앞자리(n째 자리) 당 (n-1)!의 숫자를 뒤에 붙일 수 있음을 활용하여 한자리씩 추가해 주었다
     
---------------------------------------

