---------------------------------------
### `체육복` 

  - [출처링크]  (https://programmers.co.kr/learn/courses/30/lessons/42862)
  
![image](https://user-images.githubusercontent.com/15559593/136975922-6dbc1004-e2fb-43a6-915a-471a3b212a08.png)

  - `구현코드`

    ```Python
      def solution(n, lost, reserve):

          reserve2 = list(set(reserve)-set(lost))
          lost2 = list(set(lost)-set(reserve))

          for num in reserve2:
              if num-1 in lost2:
                  lost2.remove(num-1)
              elif num+1 in lost2:
                  lost2.remove(num+1)
          return n - len(lost2)

    ```
    
   - `다른풀이(부분)`

     ```Python
      #     reserve2 = [x for x in reserve if x not in lost]
      #     lost2 = [x for x in lost if x not in reserve]
      #리스트 교집합 list(set(lst1) & set(lst2))
      #리스트 차집합 list(set(lst1) - set(lst2)) or list(set(lst1).difference(lst2))
     ```  
    
  - `피드백`

     - set을 활용한 교집합, 차집합, 합집합 학습
     
---------------------------------------
