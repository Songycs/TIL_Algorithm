---------------------------------------
### `신규 아이디 추천` 

  - [출처링크](https://programmers.co.kr/learn/courses/30/lessons/72410?language=python3)
  
  
![image](https://user-images.githubusercontent.com/15559593/132869799-4924d128-5664-479b-b0bb-e09c6b47aab9.png)


  - `구현코드`
  ```Python
      import re
      def solution(new_id):
          new_id = re.sub('[^a-z0-9_.-]', '', new_id.lower())  
          while ".." in new_id:
              new_id = new_id.replace("..",".")
          if new_id and new_id[0]==".":
              new_id = re.sub(r'.', '', new_id, count = 1)
          if new_id and new_id[-1]==".":
              new_id = new_id[:-1]
          if new_id=="":
              new_id = "a"
          if len(new_id)>=16:
              if new_id[14]==".":
                  new_id=new_id[:14]
              else:
                  new_id=new_id[:15]
          while len(new_id) <= 2:
              new_id = new_id + new_id[-1]

          return new_id
  ```
  
  - `다른풀이`
  
  ```Python
      import re

      def solution(new_id):
          st = new_id
          st = st.lower()
          st = re.sub('[^a-z0-9\-_.]', '', st)
          st = re.sub('\.+', '.', st)
          st = re.sub('^[.]|[.]$', '', st)
          st = 'a' if len(st) == 0 else st[:15]
          st = re.sub('^[.]|[.]$', '', st)
          st = st if len(st) > 2 else st + "".join([st[-1] for i in range(3-len(st))])
          return st
  ```
  
  - `피드백`
     - 정규식에 대한 이해와 학습이 매우 부족함을 느꼈다
     - 답을 맞추는데 초점을 맞추고 푼 것이 다른풀이를 보고 부끄러워졌다
     - 정규식을 충분히 활용할 수 있도록 다시 문제를 풀어볼 예정
     
---------------------------------------
