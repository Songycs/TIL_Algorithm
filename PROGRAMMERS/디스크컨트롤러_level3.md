---------------------------------------
### `디스크컨트롤러` 

  - [출처링크](https://programmers.co.kr/learn/courses/30/lessons/42627)
  
![image](https://user-images.githubusercontent.com/15559593/136430021-b556636f-abcd-4557-82b8-46238b9f03da.png)

  - `구현코드`

    ```Python
      def solution(jobs):
          job_len = len(jobs)
          time = 0
          wait_time = 0
          while jobs:
              next_list = sorted(list(filter(lambda x:x[0]<=time,jobs)),key=lambda x:x[1],reverse=True)
              if next_list:
                  next_job = next_list.pop()
                  time+=next_job[1]
                  wait_time = wait_time + time - next_job[0]
                  jobs.remove(next_job)
              else:
                  time+=1
          return wait_time//job_len
    ```
    
   - `다른풀이`

     ```Python
        import heapq
        from collections import deque


        def solution(jobs):
            answer, now, start = 0, 0, -1
            work = []
            jobs = list(sorted(jobs, key= lambda k : k[0]))
            jobs = deque(jobs)
            total_cnt = len(jobs)
            while jobs or work:
                while jobs and start < jobs[0][0] <= now:
                    w_time, w_access = jobs.popleft()
                    heapq.heappush(work, [w_access, w_time])

                if work:
                    current = heapq.heappop(work)
                    start = now
                    now += current[0]
                    answer += (now - current[1])
                else:
                    now += 1

            return int(answer / total_cnt)
     ```  
    
  - `피드백`

     - heapq를 사용해보려다가 실패해서 리스트와 filter를 활용해서 풀이하였음, 디스크에 job이 올라갈때마다 wait_time을 추가해서 전체 대기시간을 계산했음
     - 다음 실행 가능한 jobs 리스트를 만드는 과정, 다음 디스크에 올라갈 job을 jobs에서 삭제하는 과정등 복잡도면에서 비효율적이었음
     - jobs 자체를 heap으로 구현하려고 했던 것이 한계를 만든 듯 하다 
     
---------------------------------------
