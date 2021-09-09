---------------------------------------
### `기능개발` 

  - [출처링크](https://programmers.co.kr/learn/courses/30/lessons/42586)


  ![image](https://user-images.githubusercontent.com/15559593/132706066-17f91f41-7237-4fbe-8b90-f29f061bfe90.png)


  - `구현코드`
    ```Python
      import math
      from collections import deque

      def solution(progresses, speeds):
          answer = []
          deployAfter = deque([])

          for i in range(len(progresses)):
              deployAfter.append(math.ceil((100 - progresses[i]) / speeds[i]))

          while deployAfter:
              nextDeploy = 1;
              first = deployAfter.popleft();
              while True:
                  if deployAfter:
                      next = deployAfter.popleft();
                      if next <= first:
                          nextDeploy += 1
                      else:
                          deployAfter.appendleft(next)
                          break
                  else:
                      break
              answer.append(nextDeploy);
          return answer
    ```

  - `구현과정 및 시행착오`
     - 배포까지 남은 시간을 먼저 deplyAfter에 저장
     - 내림차순의 그룹을 묶어서 배포 기준일을 정하였다

---------------------------------------
