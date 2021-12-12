// 경로탐색, 1에서 n번으로 가는 경로의 수 \
// DFS, 인접행렬 O(N2), 노드수 적을때
function solution(n, arr){
  let answer=0;
  let graph=Array.from(Array(n+1), ()=>Array(n+1).fill(0)); //행 N+1, 열 N+1,
  let ch=Array.from({length:n+1}, ()=>0);
  path=[];
  for(let [a, b] of arr){
      graph[a][b]=1;
  }
  function DFS(v){
      if(v===n){
          answer++;
          console.log(path);
      }
      else{
          for(let i=1; i<=n; i++){
              if(graph[v][i]===1 && ch[i]===0){
                  ch[i]=1;
                  path.push(i);
                  DFS(i);
                  ch[i]=0;
                  path.pop();
              }
          }
      }
  }

  path.push(1);
  ch[1]=1; //실수주의
  DFS(1);
  return answer;
}


// 경로탐색, 1에서 n번으로 가는 경로의 수 \
// DFS, 인접리스트 O(N+E, 노드수 많을때

function solution(n, arr){
  let answer=0;
  let graph=Array.from(Array(n+1), ()=>Array());
  let ch=Array.from({length:n+1}, ()=>0);
  let path=[]
  for(let [a, b] of arr){
      graph[a].push(b);
  }
  function DFS(v){
      if(v===n){
          answer++;
          console.log(path);
      }
      else{
          for(let nv of graph[v]){
              if(ch[nv]===0){
                  path.push(nv);
                  ch[nv]=1;
                  DFS(nv);
                  ch[nv]=0;
                  path.pop();
              }
          }
      }
  }
  ch[1]=1;
  path.push(1);
  DFS(1);
  return answer;
}
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "G", "H", "I"],
  D: ["B", "E", "F"],
  E: ["D"],
  F: ["D"],
  G: ["C"],
  H: ["C"],
  I: ["C", "J"],
  J: ["I"],
};

//DFS 스택형 기본
const dfs = (graph, startNode) => {
  let needVisitStack = []; // 탐색을 해야 할 노드들
  let visitedQueue = []; // 탐색을 마친 노드들

  needVisitStack.push(startNode);

  // 탐색을 해야 할 노드가 남아 있다면
  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop();
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);
      needVisitStack = [...needVisitStack, ...graph[node]];
    }
  }

  return visitedQueue;
};

// 미로탐색 N은 7, DFS 1은벽 0은 통과가능

function solution(board){
  let answer=0;
  let dx=[-1, 0, 1, 0];
  let dy=[0, 1, 0, -1];
  function DFS(x, y){
      if(x===6 && y===6) answer++;
      else{
          for(let k=0; k<4; k++){
              let nx=x+dx[k];
              let ny=y+dy[k];
              if(nx>=0 && nx<=6 && ny>=0 && ny<=6 && board[nx][ny]===0){
                  board[nx][ny]=1;
                  DFS(nx, ny);
                  board[nx][ny]=0;
              }
          }
      }
  }
  board[0][0]=1;
  DFS(0, 0);
  return answer;
}

//이진트리 BFS

function solution(){
  let answer="";
  let queue=[];
  queue.push(1);
  while(queue.length){
      console.log(queue);
      let v=queue.shift();
      answer+=v+" ";
      for(let nv of [v*2, v*2+1]){
          if(nv>7) continue; //범위 내의 값이면
          queue.push(nv);
      }
  }
  return answer;
}

//송아지 찾기 뒤1, 앞1, 앞5 점프가능, (사람위치, 송아지위치)
// 1레벨- 출발 2레벨- 첫 점프로 갈 수 있는 곳

function solution(s, e){
  let answer=0;
  let ch=Array.from({length:10001}, ()=>0);
  let dis=Array.from({length:10001}, ()=>0);
  let queue=[];
  queue.push(s);
  ch[s]=1;
  dis[s]=0;
  while(queue.length){
      let x=queue.shift();
      for(let nx of [x-1, x+1, x+5]){
          if(nx===e) return dis[x]+1;
          if(nx>0 && nx<=10000 && ch[nx]===0){
              ch[nx]=1;
              queue.push(nx);
              dis[nx]=dis[x]+1;
          }
      }
  }
  return answer;
}

//섬나라 아일랜드(BFS), 1은 섬, 0은 바다 몇개의 섬인가, 상하좌우대각선

function solution(board){
  let answer=0;
  let n=board.length;
  let dx=[-1, -1, 0, 1, 1, 1, 0, -1];
  let dy=[0, 1, 1, 1, 0, -1, -1, -1];
  let queue=[];
  for(let i=0; i<n; i++){
      for(let j=0; j<n; j++){
          if(board[i][j]===1){
              board[i][j]=0;
              queue.push([i, j]);
              answer++;
              while(queue.length){
                  let x=queue.shift();
                  for(let k=0; k<8; k++){
                      let nx=x[0]+dx[k];
                      let ny=x[1]+dy[k];
                      if(nx>=0 && nx<n && ny>=0 && ny<n && board[nx][ny]===1){
                          board[nx][ny]=0;
                          queue.push([nx, ny]);
                      }
                  }
              }

          }
      }
  }
  return answer;
}

//섬나라 아일랜드(DFS), 1은 섬, 0은 바다 몇개의 섬인가, 상하좌우대각선
function solution(board){
  let answer=0;
  let n=board.length;
  let dx=[-1, -1, 0, 1, 1, 1, 0, -1];
  let dy=[0, 1, 1, 1, 0, -1, -1, -1];
  function DFS(x, y){
    board[x][y]=0;
    for(let k=0; k<8; k++){
        let nx=x+dx[k];
        let ny=y+dy[k];
        if(nx>=0 && nx<n && ny>=0 && ny<n && board[nx][ny]===1){
            DFS(nx, ny);
        }
    }
  }
  for(let i=0; i<n; i++){
      for(let j=0; j<n; j++){
          if(board[i][j]===1){
              board[i][j]=0;
              answer++;
              DFS(i, j);
          }
      }
  }
  return answer;
}


// 네트워크 개수 파악 bfs (연결여부 )
function solution(n, computers) {
  let answer = 0;
  let visited = Array.from({length:n},()=>0);
  let queue = []

  function bfs(num){
      queue.push(num);
      visited[num]=1;
      while(queue.length){
          let x = queue.shift();
          computers[x].forEach((item,index)=>{
                  if(visited[index]===0 && item===1){
                      visited[index] = 1;
                      queue.push(index);
                  }
          });

      }
  }
  for(let k=0;k<n;k++){
      if(visited[k]===0){
          bfs(k);
          answer++;
      }
  }

  return answer;
}

//bfs, 단어변환
function solution(begin, target, words) {
  let answer = 0;
  let visited = [];
  let queue = [];

  if(!words.includes(target)) return 0;

  queue.push([begin,answer]);

  while(queue) {
      let [v, cnt] = queue.shift();

      if (v === target) {
          return cnt;
      }

      words.forEach(word => {
          let notEqual = 0;

          if(visited.includes(word)) return;

          // 하나만 다른~
          // for (let i = 0 ; i < word.length ; i++) {
          //   const letter = slicedWord(word, i);
          //   const matched = words.filter((v, j) => !visited.has(v) && slicedWord(v, i) === letter);
          //   temp.push(...matched);
          // }

          // words의 단어들인 w와 begin의 문자를 비교하여 서로 다른 부분의 인덱스들을 구한다.
          //const idx = [...w].reduce((a, c, i) => (c != s[i] ? a.push(i) : a, a), []);

          for (let i=0; i<word.length; i++) {
              if (word[i] !== v[i]) notEqual++;
          }

          if (notEqual === 1) {
              queue.push([word, ++cnt]);
              visited.push(word);
          }
      });
  }

  return answer;
}


//여행경로
function solution(tickets) {
  let answer = [];
  const result = [];
  const visited = [];

  tickets.sort();

  const len = tickets.length;
  const dfs = (str, count) => {
    result.push(str);
    if(count === len) {
      answer = result;
      return true;
    }
    for(let i = 0; i < len; i++) {
      if(!visited[i] && tickets[i][0] === str) {
        visited[i] = true;

        if(dfs(tickets[i][1], count+1)) return true;

        visited[i] = false;
      }
    }
    result.pop();
    return false;
  }
  dfs("ICN", 0);
  return answer;
}


//PATH 고려
function solution(tickets) {
  tickets.sort(); // 글자순 정렬
  let vis=Array(tickets.length).fill(false);
  var answer = [];
  function dfs(cur,cnt,path){
      if(cnt===tickets.length && answer.length===0){
          answer=path;
          return;
      }
      for(let i=0;i<tickets.length;i+=1){
          if(vis[i])continue;
          if(tickets[i][0]===cur){
              vis[i]=true;
              dfs(tickets[i][1],cnt+1,[...path,tickets[i][1]]);
              vis[i]=false;
          }
      }
  }
  dfs("ICN",0,["ICN"])
  return answer;
}