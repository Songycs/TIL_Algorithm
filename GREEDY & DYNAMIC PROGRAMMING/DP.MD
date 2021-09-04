
---------------------------------------

### `Dynamic Programming`
  - 문제를 작은 문제로 단순화 ( 부분 문제 정의 )
  - 하나의 문제는 단 한번만 푼다, 해결된 작은 문제로 큰 문제를 해결한다.
  - 작은 문제가 반복될 경우, 매 번 답이 같아야 DP를 활용할 수 있다
  - `Memoization`: 한 번 계산한 작은 문제를 저장해두고 활용함, 메모리 최적화 시 활용, 공간에 로드
  - `recurrence relation`: 점화식, 인접한 항 사이의 관계식, 문제를 보고 점화식을 구해볼 것

- `문제 예시`
    - 피보나치 (Fibonacci numbers)
    - 편집거리 알고리즘 (Levenshtein Distance, Edit Distance)
    - 막대기 자르기
    - 최장 공통 부분문자열(Longest common substring)
    - 0/1(분할이 불가능한) 배낭문제
    - 최적경로찾기( NxN 격자 등 )

- `Bottom-up VS Top-down`
    - Top-down은 재귀함수로 구현하는 경우 대부분에 해당, 코드의 가독성이 좋지만 구현이 어려움
    - 즉, Top-down은 큰 문제를 해결할때, 작은 문제가 풀리지 않았다면 작은 문제의 해결을 시도
    - Bottom-up은 반복적으로 구현되는 경우에, 작은 문제부터 차근차근 올라가는 형식

- `VS Divide and Conquer`
    - 두가지 모두 '최적부분구조'(Optimal substructure)가 있어야 활용할 수 있다.
    - 작은 문제의 해결이 중복되는 지 여부
    - DP는 작은 부분문제들이 반복되는 것(답이 같음)을 이용해 풀이를 진행함
    - 즉 작은 문제는 한번만 해결 후 메모(Memoization)
    - 분할정복의 예시로는 퀵정렬(Quick Sort)가 있다.
