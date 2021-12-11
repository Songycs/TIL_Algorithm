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