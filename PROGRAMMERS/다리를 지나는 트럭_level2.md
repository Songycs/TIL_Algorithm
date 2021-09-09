
---------------------------------------
### `다리를 지나는 트럭 (스택/큐)` 
  - [출처링크](https://programmers.co.kr/learn/courses/30/lessons/42583)


![image](https://user-images.githubusercontent.com/15559593/132708371-5a11152a-01e5-4c57-bd45-8b4928f4f9ef.png)
  
  
  - `구현코드`
    ```Python
      from collections import deque

      def solution(bridge_length, weight, truck_weights):
          answer = 0
          truck_weights = deque(truck_weights)
          truck_on_bridge = deque([]) #queue of [weight,in_time]
          weight_on_bridge = 0
          time = 0

          # 다리위, 대기중인 남은트럭이 없을 때까지
          while len(truck_weights)!=0 or len(truck_on_bridge)!=0:
              #다리를 빠져나가는 트럭 처리
              while True:
                  if truck_on_bridge:
                      truck = truck_on_bridge.popleft()
                      if time - truck[1] == bridge_length:
                          weight_on_bridge -= truck[0]
                      else: #맨앞이 아니면 나머지도 아니므로 BREAK
                          truck_on_bridge.appendleft(truck)
                          break;
                  else: #다리에 트럭이 없으면 빠져나갈게 없으므로 BREAK
                      break

              #다리에 들어오는 트럭처리
              if truck_weights: #다리에 올라갈 트럭이 남아있으면
                  next = truck_weights.popleft()
                  if weight_on_bridge + next <= weight: #무게가 남으면,
                      truck_on_bridge.append([next,time]) #다리에 트럭추가, 시간기록, 무게추가
                      weight_on_bridge += next  
                  else:
                      truck_weights.appendleft(next);
              time += 1

          return time
    ```
    
  - `구현과정 및 시행착오`
      - 구현이 조금 복잡해서 주석으로 조건을 빼먹지않고 단계별로 처리하려고 했음
      - 다리를 빠져나가는 트럭 -> 들어가는 트럭의 조건들을 반복적으로 확인
      - 리스트를 큐로 [ 트럭의 무게, 입장시간 ]을 관리
      - deque의 popleft(), appendleft()를 활용하여 가장 먼저 진입한 트럭의 상태를 확인하였음.
---------------------------------------
