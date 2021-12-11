//DP

//LIS
function solution(arr){
  let lis = [];
  for(let i = 0; i<arr.length; i++){
    lis[i] = 1;
    for(let j=0; j<i; j++){
      if(arr[j]<arr[i]){
        lis[i] = Math.max(lis[i],lis[j]+1);
      }
    }
  }
  return Math.max(...lis)
}

let arr4 = [1,4,6,8,3,5,6,7];

function solution(arr){
  arr.unshift(-Infinity);
  const N = arr.length;
  let cache = Array(N).fill(-1);

  function find(start){
    if(cache[start]!=-1){
      return cache[start];
    }else{
      let ret = 0;
      for(let next = start+1; next<N; next++){
        if(arr[start]<arr[next]){
          ret = Math.max(ret,find(next)+1);
        }
      }
      cache[start] = ret;
      return ret;
    }
  }

  return find(0);
}

let arr2 = [1,4,6,8,3,5,6,7];
//완탐 VER
function lis(arr){
  if(arr.length==0) return 0;
  else{
    let ret = 1;
    for(let i = 0; i<arr.length; i++){
      let next = [];
      for(let j = i+1; j<arr.length; j++){
        if(arr[i]<arr[j]){
          next.push(arr[j]);
        }
      }
      ret = Math.max(ret,1+lis(next));
    }
    return ret;
  }
}

let arr = [1,4,6,8,3,5,6,7];

//knapsack
function solution(m, coin){
  let answer=0;
  let dy=Array.from({length:m+1}, ()=>1000);
  dy[0]=0;
  for(let i=1; i<arr.length; i++){
      for(let j=coin[i]; j<=m; j++){
          dy[j]=Math.min(dy[j], dy[j-coin[i]]+1);
      }
  }
  answer=dy[m];
  return answer;
}


//최대 점수 구하기(knapsack)
function solution(m, arr){
  let answer=0;
  let dy=Array.from({length:m+1}, ()=>0);
  for(let i=0; i<arr.length; i++){
      let ps=arr[i][0]; // score
      let pt=arr[i][1]; // time
      for(let j=m; j>=pt; j--){
          dy[j]=Math.max(dy[j], dy[j-pt]+ps);
      }
  }
  answer=dy[m];
  return answer;
}

//Greedy

//회의실 배정
function solution(meeting){
  let answer=0;
  meeting.sort((a, b)=>{
      if(a[1]===b[1]) return a[0]-b[0];
      else return a[1]-b[1];
  })
  let et=0;
  for(let x of meeting){
      if(x[0]>=et){
          answer++;
          et=x[1];
      }
  }
  return answer;
}

//결혼식 피로연 참가인원, 문자정렬
function solution(times){
  let answer=Number.MIN_SAFE_INTEGER;
  let T_line=[];
  for(let x of times){
      T_line.push([x[0], 's']);
      T_line.push([x[1], 'e']);
  }
  T_line.sort((a, b)=>{
      if(a[0]===b[0]) return a[1].charCodeAt()-b[1].charCodeAt();
      else return a[0]-b[0];
  });
  let cnt=0;
  for(let x of T_line){
      if(x[1]==='s') cnt++;
      else cnt--;
      answer=Math.max(answer, cnt);
  }
  return answer;
}
// 거스름돈, 동전개수 최소화

function solution(k) {
  let count = 0;
  const arr = [500,100,50,10,5, 1];
  for(let item of arr){
    count = count + Math.floor(k/item); //동전의 개수
    k = k - item * Math.floor(k/item); // 남은 돈 계산
  }
  return count;
}


//최소 박스로 이삿짐 싸기
function solution(stuff, limit) {
  let count = 0;
  let sortedStuff = stuff.sort((a, b) => a - b)

  while (sortedStuff.length !==0) {
  if (sortedStuff[0] + sortedStuff[sortedStuff.length-1] <= limit) {
      count++
      sortedStuff.shift();
      sortedStuff.pop();
    } else {
      count++
      sortedStuff.pop();
    }
  }
  return count;
}


//결정 알고리즘

//DVD
function count(songs, capacity){
  let cnt=1, sum=0;
  for(let x of songs){
      if(sum+x > capacity){
          cnt++;
          sum=x;
      }
      else sum+=x;
  }
  return cnt;
}

function solution(m, songs){
  let answer;
  let lt=Math.max(...songs); //최소 DVD길이
  let rt=songs.reduce((a, b)=>a+b, 0); //최대 길이
  //DVD길이 변경해가면서 수행
  while(lt<=rt){
      let mid=parseInt((lt+rt)/2);
      if(count(songs, mid)<=m){
          answer=mid;
          rt=mid-1;
      }
      else{
          lt=mid+1;
      }
  }
  return answer;
}


//마구간

function count(stable, dist){
  let cnt=1, ep=stable[0];
  for(let i=1; i<stable.length; i++){
      if(stable[i]-ep>=dist){
          cnt++;
          ep=stable[i];
      }
  }
  return cnt;
}
function solution(c, stable){
  let answer;
  stable.sort((a, b)=>a-b);
  let lt=1;
  let rt=stable[stable.length-1];
  while(lt<=rt){
      let mid=parseInt((lt+rt)/2);
      if(count(stable, mid)>=c){
          answer=mid;
          lt=mid+1;
      }
      else rt=mid-1;
  }
  return answer;
}

