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


//순열 구하기
function solution(m, arr){
  let answer=[];
  n=arr.length;
  let ch=Array.from({length:n}, ()=>0);
  let tmp=Array.from({length:m}, ()=>0);;
  function DFS(L){
      if(L===m){
          answer.push(tmp.slice());
      }
      else{
          for(let i=0; i<n; i++){
              if(ch[i]===0){
                  ch[i]=1;
                  tmp[L]=arr[i];
                  DFS(L+1);
                  ch[i]=0;
              }
          }
      }
  }
  DFS(0);
  return answer;
}

const outArr2 = []
const permute = (array, eachElements, outArr) => {
    let chr

    for(let i = 0; i < eachElements.length; i++) {
        chr = eachElements.splice(i, 1)[0] // i위치에서 1만큼 제거한 배열의 0번 요소
        array.push(chr)

        if(eachElements.length == 0) {
            outArr.push(array.slice())
        }

        permute(array, eachElements, outArr)
        eachElements.splice(i, 0, chr) // i 위치에서 0만큼 제거(=아무것도 안함)한 뒤 chr을 i 위치에 삽입
        array.pop()
    }
    return

}
permute([], cases, outArr2)
console.log(outArr2.map(_ => _.join("")))


// 팩토리얼
function solution(n){
  let answer;
  function DFS(n){
      if(n===1) return 1;
      else return n*DFS(n-1);
  }
  answer=DFS(n);
  return answer;
}


//조합
function solution(n, r){
  let answer=[];
  let dy= Array.from(Array(35), () => Array(35).fill(0));

  function DFS(n, r){
      if(dy[n][r]>0) return dy[n][r];
      if(n===r || r===0) return 1;
      else return dy[n][r]=DFS(n-1, r-1)+DFS(n-1, r);
  }
  answer=DFS(n, r);
  return answer;
}


function solution(n, m){
  let answer=[];
  let tmp=Array.from({length:m}, ()=>0);;
  function DFS(L, s){
      if(L===m){
          answer.push(tmp.slice());
      }
      else{
          for(let i=s; i<=n; i++){
              tmp[L]=i;
              DFS(L+1, i+1);
          }
      }
  }
  DFS(0, 1);
  return answer;
}

//부분집합 1부터 N까지의 원소를 갖는 집합의 부분집합
function subSets(arr) {
  //check표시 해줄 배열
  let check = new Array(arr.length).fill(0);
  //모든 부분집합이 담길 배열
  let powerSetArr = [];
  const dfs = (depth) => {
    //check에 1인 index와 같은 index에 있는 arr만 filter
    if (depth === check.length) {
      powerSetArr.push(arr.filter((v, idx) => check[idx]));
    } else {
      //포함o
      check[depth] = 1;
      dfs(depth + 1);
      //포함x
      check[depth] = 0;
      dfs(depth + 1);
    }
  };
  dfs(0);
  return powerSetArr;
}

const subSets = (nums) => {
  const res = [];

  const dfs = (start = 0, arr = []) => {
    res.push(arr);

    //if (arr.length === nums) return; 해도되고 안써도 된다. 속도는 조금더 좋을듯

    for (let i = start; i < nums.length; i++) {
      dfs(i + 1, [...arr, nums[i]]);
    }
  };
  dfs();

  return res;
};

//바둑이 싣기 ,아래 합이 같은 부분집합과 유사
// n을 넘지않는 최대 부분합
function solution(c, arr){
  let answer=Number.MIN_SAFE_INTEGER;
  let n=arr.length;
  function DFS(L, sum){
      if(sum>c) return;
      if(L===n){
          answer=Math.max(answer, sum);
      }
      else{
          DFS(L+1, sum+arr[L]);
          DFS(L+1, sum);
      }
  }
  DFS(0, 0);
  return answer;
}

//합이 같은 부분집합
function solution(arr){
  let answer="NO", flag=0;
  let total=arr.reduce((a, b)=>a+b, 0);
  let n=arr.length;
  function DFS(L, sum){
      if(flag) return;
      if(L===n){
          if((total-sum)===sum){
              answer="YES";
              flag=1;
          }
      }
      else{
        //arr의 한 값을 쓸지 말지를 분기하여 dfs수행
        //arr값 사용하는경우
          DFS(L+1, sum+arr[L]);
        //arr값 사용하지않는경우
          DFS(L+1, sum);
      }
  }
  DFS(0, 0);
  return answer;
}

// 최대점수 구하기 n개의 문제, 제한시간M, 바둑이와 유사하면서 time고려
function solution(m, ps, pt){
  let answer=Number.MIN_SAFE_INTEGER;
  let n=ps.length;
  function DFS(L, sum, time){
      if(time>m) return;
      if(L===n){
          answer=Math.max(answer, sum);
      }
      else{
          DFS(L+1, sum+ps[L], time+pt[L]);
          DFS(L+1, sum, time);
      }
  }

  DFS(0, 0, 0);
  return answer;
}

//중복순열
function solution(n, m){
  let answer=[];
  let tmp=Array.from({length:m}, ()=>0);
  function DFS(L){
      if(L===m){
          answer.push(tmp.slice());
      }
      else{
          for(let i=1; i<=n; i++){
              tmp[L]=i;
              DFS(L+1);
          }
      }
  }

  DFS(0);
  return answer;
}

const permuteRepl = (array, n, eachElements, outArr) => {
  // 재귀 종료문
  if (array.length == n) {
      outArr.push(JSON.parse(JSON.stringify(array))) // 깊은 복사
      return
  }
  for (let el of eachElements) {
      array.push(el)
      permuteRepl(array, n, eachElements, outArr)
      array.pop()
  }
}
permuteRepl([], cases.length, cases, outArr)
console.log(outArr.map(_ => _.join("")))