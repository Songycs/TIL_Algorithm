//Union & Find

// 처음에는 자기 자신의 값을 부모로 가지는 배열 생성
const parent = [];
for(let i=0; i<n; i++) parent.push(i);

// 만약 초기 값이 아니라면 parent[x]를 이용해 위로 올라가서 부모값 찾음
const getParent = (parent, x) => {
  if(parent[x] === x) return x;
  return parent[x] = getParent(parent,parent[x]);
}

// 이때 두 부모중 작은 값을 가지는 부모로 합쳐준다.
const unionParent = (parent, x, y) => {
  const n1 = getParent(parent,x);
  const n2 = getParent(parent,y);
  if(n1<n2) return parent[n2] = n1;
  else return parent[n1] = n2;
}

// 두 섬의 부모를 찾고, 부모가 같으면 true, 다르면 false return
const findParent = (parent, x, y) => {
  const n1 = getParent(parent,x);
  const n2 = getParent(parent,y);
  if(n1===n2) return true;
  else return false;
}


// 크루스칼
function solution(n, costs) {
  let answer = 0;
  const parent = [];
  for(let i=0; i<n; i++) parent.push(i);

  costs.sort((a,b)=>a[2]-b[2]);

  const getParent = (parent, x) => {
      if(parent[x] === x) return x;
      return parent[x] = getParent(parent,parent[x]);
  }

  const unionParent = (parent, x, y) => {
      const n1 = getParent(parent,x);
      const n2 = getParent(parent,y);
      if(n1<n2) return parent[n2] = n1;
      else return parent[n1] = n2;
  }

  const findParent = (parent, x, y) => {
      const n1 = getParent(parent,x);
      const n2 = getParent(parent,y);
      if(n1===n2) return true;
      else return false;
  }

  for(const cost of costs){
      if(!findParent(parent,cost[0],cost[1])){
          answer += cost[2];
          unionParent(parent,cost[0],cost[1]);
      }
  }
  return answer;
}



// 다익스트라

// 1번에서 가장 멀리 떨어진 노드의 개수는?
const dijkstra = (n, adj) => {
  const dist = Array(n + 1).fill(false);
  const queue = [];

  queue.push({ to: 1, cost: 0 });
  dist[1] = 0;

  while (queue.length !== 0) {
    let { to, cost } = queue.shift();

    adj[to].map((nextNode) => {
      const nextCost = cost + 1;
      if (dist[nextNode] === false) {
        dist[nextNode] = nextCost;
        queue.push({ to: nextNode, cost: nextCost });
      }
    });
  }

  const max = Math.max(...dist);
  return dist.filter((num) => {
    return num === max;
  }).length;
};

function solution(n, edge) {
  let answer = 0;
  let adj = Array.from({ length: n + 1 }, () => []);

  // 인접 리스트 생성
  edge.forEach((route) => {
    adj[route[0]].push(route[1]);
    adj[route[1]].push(route[0]);
  });

  // 다익스트라
  answer = dijkstra(n, adj);
  return answer;
}


//플로이드워셜
const a = [];
for (let i = 0; i < n; i++) {
  a[i] = [];
  for (let j = 0; j < n; j++) {
    a[i][j] = null;
  }
}

// results의 내용 반영
// a[i][j] === true : i 선수가 j 선수보다 강함
results.forEach(
  v => {
    a[v[0] - 1][v[1] - 1] = true;
  }
);
for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        a[i][j] = a[i][j] || (a[i][k] && a[k][j]);
    }
  }
}


//순위 정하기
function solution(n, results) {
  let answer = 0;
  let adjMatrix = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(Infinity)
  );

  results.forEach(([win, lose]) => {
    adjMatrix[win][lose] = 1; // 이김
    adjMatrix[lose][win] = -1; // 짐
  });

  // 플로이드 와샬
  // 한 다리를 걸쳐서 2개의 선수 승부 결과를 알 수 있어야 합다.
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (i === j) continue;
        if (adjMatrix[i][j] === Infinity) {
          if (adjMatrix[i][k] === 1 && adjMatrix[k][j] === 1) {
            adjMatrix[i][j] = 1; // 이김
          } else if (adjMatrix[i][k] === -1 && adjMatrix[k][j] === -1) {
            adjMatrix[i][j] = -1; // 짐
          }
        }
      }
    }
  }

  adjMatrix.forEach((row) => {
    const result = row.filter((item) => {
      return item === Infinity;
    }).length;

    if (result === 2) answer++;
  });

  return answer;
}
//이중배열 초기화
let graph = [];
for (let i = 0; i < n; i++) {
  graph[i] = [];
  for (let j = 0; j < n; j++) {
    graph[i][j] = 0;
  }
}
const graph = Array.from(Array(results.length), () => Array(results.length).fill(0))
const graph = Array.from({length:n},()=>new Array(n).fill(Infinity))