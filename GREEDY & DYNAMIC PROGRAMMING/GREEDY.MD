
---------------------------------------
### `Greedy`
  - 매 순간 눈 앞의 최적의 방향으로 답을 구하는 알고리즘, 복잡하지않고 신속하게 근사치 접근
  - Divide and Conquer
  - Selection Procedure -> Feasibility Check -> Solution Check -> SP
  - Optimal solution을 보장하지 않으며, '어느정도 괜찮은지'에 대해서는 증명을 요함
  - 탐욕 선택 속성(greedy choice property), 최적 부분 구조(Optimal substructure)
    - 매 선택이 다음 선택에 무관해야함
  - `문제예시`
    - Decision Tree Learning
    - Activity selection problem
    - 거스름돈 / 동전
      - 하위동전의 조합이 상위동전을 만들 수 있는 지 여부 구분 
    - minimum spanning tree(kruscal etc)
    - huffman
      - 데이터 압축 기법 알고리즘
      - 고정길이 코드로 이루어진 데이터를 접두어 코드로 변환시켜 데이터압축
      - 고정길이코드(Fixed Length Code, EX) ASCII)
      - 가변길이코드(Variable Length Code, EX) Prefix code)
      - Prefix code (코드 집합이 서로 다른 코드의 접두어가 되지않는 집합)
      - huffman tree
    - dijkstra
    - 기타 조건이 많이 걸린 문제

  - `최적값 찾기 실패 예시`
    - TSP(Traveling Salesman Problem)
    - Knapsack problem
 
