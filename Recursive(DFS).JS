//이진수 출력

function solution(n){
  let answer="";
  function DFS(n){
      if(n===0) return;
      else{
          DFS(parseInt(n/2));
          answer+=String(n%2);
      }
  }
  DFS(n);
  return answer;
}

// 이진트리 순회 (1~7)
function solution(n){
  let answer="";
  function DFS(v){
      if(v>7) return;
      else{
          answer+=(v+' ');
          DFS(v*2);
          DFS(v*2+1);
      }
  }
  DFS(n);
  return answer;
}