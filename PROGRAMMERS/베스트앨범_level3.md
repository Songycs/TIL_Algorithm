---------------------------------------
### `베스트앨범` 

  - [출처링크](https://programmers.co.kr/learn/courses/30/lessons/42579)
  
![image](https://user-images.githubusercontent.com/15559593/136378645-d4fe8537-cd7a-43bb-ada5-a0dc1f5b7292.png)


  - `구현코드`

    ```Python
      from collections import defaultdict


      def solution(genres, plays):
          answer = []
          genre_sum = defaultdict(lambda: 0)
          genre_play = defaultdict(lambda :[])
          count = defaultdict(lambda:0)

          #장르별 최대 수 , 2로 초기화    
          for genre in genres:
              count[genre] = 2
          for i in range(len(genres)):
              genre_sum[genres[i]] += plays[i]
              genre_play[genres[i]].append([plays[i],i])

          genre_sum = sorted(genre_sum.items(),key=lambda x:x[1])

          while len(genre_sum)>0:
              next_genre = genre_sum.pop()[0]
              sorted_play = sorted(genre_play[next_genre],key=lambda x:(x[0],-x[1]))

              while count[next_genre]>0 and len(sorted_play)>0:
                  count[next_genre] -= 1
                  answer.append(sorted_play.pop()[1])

          return answer
    ```

  - `피드백`

     - dict자료형으로 hash를 만들어줄때, 자료형이 비어있는지 확인해야했는데, defaultdict를 배워서 활용하게 되었음. 
     - count를 장르별로 hash로 저장하지 않고 slice등의 방법으로 할 수 있었을 듯 하다
     
---------------------------------------
