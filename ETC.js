//순열 구하기, 중복순열아님 주의


const getPermutations= function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)] // 해당하는 fixed를 제외한 나머지 배열
    const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구한다.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

//조합 구하기
function combination(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}
//중복 순열

function permutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}


// 배열 최대 최소


const min = Math.min.apply(null, numbers);
// index = queue.indexOf(Math.min.apply(null,queue));
// queue.splice(index,1)
const max = Math.max.apply(null, numbers);

// 최장 내림차순 배열
function solution(progresses, speeds) {
  var answer = [0];
  let left = [];
  progresses.map((progress,i)=>{
      left[i] = Math.ceil((100-progress)/speeds[i])
  })
  let maxDay = left[0];
  for (let i = 0, j=0; i < left.length; i++){
      if(maxDay>=left[i]){
          answer[j]+=1;
      }
      else {
          maxDay = left[i];
          answer[++j] = 1;
      }
  }
  return answer;
}

//이분탐색

function binarySearch(sortedArray, seekElement) {
  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (sortedArray[middleIndex] === seekElement) {
      return middleIndex;
    }
    if (sortedArray[middleIndex] < seekElement) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return -1;
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


//회문

function solution(s){
  let answer="YES";
  s=s.toLowerCase();
  if(s.split('').reverse().join('')!=s) return "NO";
  return answer;
}
function solution(s){
  let answer="YES";
  s=s.toLowerCase();
  let len=s.length;
  for(let i=0; i<Math.floor(len/2); i++){
      if(s[i]!=s[len-i-1]) return "NO";
  }
  return answer;
}

//팰린드롬

function solution(s){
  let answer="YES";
  s=s.toLowerCase().replace(/[^a-z]/g, '');
  if(s.split('').reverse().join('')!==s) return "NO";
  return answer;
}

//가장 짧은 문자거리
function solution(s, t){
  let answer=[];
  let p=1000;
  for(let x of s){
      if(x===t){
          p=0;
          answer.push(p);
      }
      else{
          p++;
          answer.push(p);
      }
  }
  p=1000;
  for(let i=s.length-1; i>=0; i--){
      if(s[i]===t) p=0;
      else{
          p++;
          answer[i]=Math.min(answer[i], p);
      }
  }
  return answer;
}

//문자열 압축
function solution(s){
  let answer="";
  let cnt=1;
  s=s+" ";
  for(let i=0; i<s.length-1; i++){
      if(s[i]===s[i+1]) cnt++;
      else{
          answer+=s[i];
          if(cnt>1) answer+=String(cnt);
          cnt=1;
      }
  }
  return answer;
}

//중복문자 제거
function solution(s){
  let answer="";
  //console.log(s.indexOf("K"));
  for(let i=0; i<s.length; i++){
      //console.log(s[i], i, s.indexOf(s[i]));
      if(s.indexOf(s[i])===i) answer+=s[i];
  }
  return answer;
}
//중복 단어제거
function solution(s){
  let answer;
  //console.log(s.indexOf("time"));
  answer=s.filter(function(v, i){
      return s.indexOf(v)===i;
  });
  return answer;
}


//가로, 세로, 대각 합 최대
function solution(arr){
  let answer=Number.MIN_SAFE_INTEGER;
  let n=arr.length;
  let sum1=sum2=0;
  for(let i=0; i<n; i++){
      sum1=sum2=0;
      for(let j=0; j<n; j++){
          sum1+=arr[i][j];
          sum2+=arr[j][i];
      }
      answer=Math.max(answer, sum1, sum2);
  }
  sum1=sum2=0;
  for(let i=0; i<n; i++){
      sum1+=arr[i][i];
      sum2+=arr[i][n-i-1];
  }
  answer=Math.max(answer, sum1, sum2);
  return answer;
}