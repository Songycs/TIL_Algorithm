
// 두 배열 합치기
function solution(arr1, arr2){
  let answer=[];
  let n=arr1.length;
  let m=arr2.length;
  let p1=p2=0;
  while(p1<n && p2<m){
      if(arr1[p1]<=arr2[p2]) answer.push(arr1[p1++]);
      else answer.push(arr2[p2++]);
  }
  while(p1<n) answer.push(arr1[p1++]);
  while(p2<m) answer.push(arr2[p2++]);
  return answer;
}

// 공통 원소 구하기
function solution(arr1, arr2){
  let answer=[];
  arr1.sort((a, b)=>a-b);
  arr2.sort((a, b)=>a-b);
  let p1=p2=0;
  while(p1<arr1.length && p2<arr2.length){
      if(arr1[p1]==arr2[p2]){
          answer.push(arr1[p1++]);
          p2++;
      }
      else if(arr1[p1]<arr2[p2]) p1++;
      else p2++;
  }
  return answer;
}

// 연속 부분 수열 (합이 특정 숫자가 되는경우)
function solution(m, arr){
  let answer=0, lt=0, sum=0;
  for(let rt=0; rt<arr.length; rt++){
      sum+=arr[rt];
      if(sum===m) answer++;
      while(sum>=m){
          sum-=arr[lt++];
          if(sum===m) answer++;
      }
  }
  return answer;
}

// 연속 부분 수열 (합이 특정 숫자 M 이하 인 경우)

function solution(m, arr){
  let answer=0, sum=0, lt=0;
  for(let rt=0; rt<arr.length; rt++){
      sum+=arr[rt];
      while(sum>m){
          sum-=arr[lt++];
      }
      answer+=(rt-lt+1);
  }
  return answer;
}