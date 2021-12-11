
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

//슬라이딩 윈도우, 최대 부분합

function solution(k, arr){
  let answer, sum=0;
  for(let i=0; i<k; i++) sum+=arr[i];
  answer=sum;
  for(let i=k; i<arr.length; i++){
      sum+=(arr[i]-arr[i-k]);
      answer=Math.max(answer, sum);
  }
  return answer;
}

// 아나그램
let s1 = "AbaAeCe";
let s2 = "baeeACA";
let s1H = new Map();

console.log(solution(s1, s2));

function solution(s1, s2) {
  for (let x of s1) {
    if (s1H.has(x)) s1H.set(x, s1H.get(x) + 1);
    else s1H.set(x, 1);
  }
  console.log(s1H)
  for (let x of s2) {
    if (!s1H.has(x) | (s1H.get(x) < 1)) return "NO";
    s1H.set(x, s1H.get(x) - 1);
    console.log(x, s1H)
  }
  return "YES";
}

// 모든 아나그램찾기(해쉬+투포인터+슬라이딩)
function compareMaps(map1, map2){
  if(map1.size!==map2.size) return false;
  for(let [key, val] of map1){
    //키가 없거나 그 키의 값이 다르면
      if(!map2.has(key) || map2.get(key)!==val) return false;
  }
  return true;
}
function solution(s, t){
  let answer=0;
  let tH = new Map();
  let sH = new Map();
  for(let x of t){
      if(tH.has(x)) tH.set(x, tH.get(x)+1);
      else tH.set(x, 1);
  }
  let len=t.length-1;
  for(let i=0; i<len; i++){
      if(sH.has(s[i])) sH.set(s[i], sH.get(s[i])+1);
      else sH.set(s[i], 1);
  }
  let lt=0;
  for(let rt=len; rt<s.length; rt++){
      if(sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt])+1);
      else sH.set(s[rt], 1);
      if(compareMaps(sH, tH)) answer++;
      sH.set(s[lt], sH.get(s[lt])-1);
      if(sH.get(s[lt])===0) sH.delete(s[lt]);
      lt++;
  }
  return answer;
}
//hash
function solution(participant, completion) {
  let hashed = []
  participant.forEach(entry => {
      hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1
  })
  completion.forEach(entry => {
      hashed[entry] = hashed[entry] - 1
  })

  for (var key in hashed) {
      if (hashed[key] >= 1) return key
  }
}

//학급회장

function solution(s){
  let answer;
  let sH = new Map();
  for(let x of s){
      if(sH.has(x)) sH.set(x, sH.get(x)+1);
      else sH.set(x, 1);
  }
  let max=Number.MIN_SAFE_INTEGER;
  for(let [key, val] of sH){
      if(val>max){
          max=val;
          answer=key;
      }
  }
  return answer;
}


//Dictionary
// Dictionary 사용하는 방법
var dictObject = {}
dictObject['banana'] = '바나나';
dictObject['hong'] = '홍';
dictObject['monkey'] = '원숭이';
console.log(dictObject) // Object {banana: "바나나", hong: "홍", monkey: "원숭이"}
// Dictionary 출력
for (var key in dictObject)
{ console.log("key : " + key +", value : " + dictObject[key]); }
// Dictionary 추가, 제거
dictObject['elephant'] = '코끼리';
 delete dictObject['elephant']; // 삭제 (제대로 삭제 되면 true, 아니면 false)
 // 모든 key를 가져오는 방법
 Object.keys(dictObject); // ["banana", "hong", "monkey"]
 // Dictionary 길이 구하는 방법
 Object.keys(dictObject).length; // 3
 // key를 체크하는 방법
 "moneky" in dictObject // true "elephant" in dictObject // false
 // key의 마지막 값 가져오는 방법
var lastKey = Object.keys(dictObject)[Object.keys(dictObject).length - 1]
console.log("last key = " + lastKey); // monkey

function solution(clothes) {
  var answer = 1;

  let dict = []
  clothes.forEach(cloth => {
      dict[cloth[1]] = dict[cloth[1]] ? dict[cloth[1]] + 1 : 1;
  })
  for(let key in dict){
      answer*=(dict[key]+1);
  }
  return answer-1;
}

function solution(clothes) {
  return Object.values(clothes.reduce((obj, t)=> {
      obj[t[1]] = obj[t[1]] ? obj[t[1]] + 1 : 1;
      return obj;
  } , {})).reduce((a,b)=> a*(b+1), 1)-1;
}