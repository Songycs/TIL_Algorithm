// 자리수 합

function solution(n, arr){
  let answer, max=Number.MIN_SAFE_INTEGER;
  for(let x of arr){
      let sum=0, tmp=x;
      //let sum = x.toString().split('').reduce((a,b)=>a+b,0);
      while(tmp){
          sum+=(tmp%10);
          tmp=Math.floor(tmp/10);
      }
      if(sum>max){
          max=sum;
          answer=x;
      }
      else if(sum===max){
          if(x>answer) answer=x;
      }
  }
  return answer;
}

// 뒤집은 소수

function isPrime(num){
  if(num===1) return false;
  for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
      if(num%i===0) return false;
  }
  return true;
}
function solution(arr){
  let answer=[];
  for(let x of arr){
      let res=0;
      while(x){
          let t=x%10;
          res=res*10+t;
          x=parseInt(x/10);
      }
      if(isPrime(res)) answer.push(res);
  }
  return answer;
}

//멘토링
// m번의 테스트, A가 B의 멘토라면 A는 M번의 테스트에서 B보다 점수가 높아야함
// 멘토멘티 짝의 개수는?

function solution(test){
  let answer=0;
  m=test.length;
  n=test[0].length;
  for(let i=1; i<=n; i++){
      for(let j=1; j<=n; j++){
          let cnt=0;
          for(let k=0; k<m; k++){
              let pi=pj=0;
              for(let s=0; s<n; s++){
                // 등수결정
                  if(test[k][s]===i) pi=s;
                  if(test[k][s]===j) pj=s;
              }
              if(pi<pj) cnt++;
          }
          //모든테스트에 통과하면,
          if(cnt===m) answer++;
      }
  }
  return answer;
}

// 졸업선물
// 최대한 많은 학생에게 선물을 줄 경우, 단 하나를 50%가격으로 살 수 있음
// 배송비 별도, 입력은 (가격,배송비)
function solution(m, product){
  let answer=0;
  let n=product.length;
  product.sort((a, b)=>(a[0]+a[1])-(b[0]+b[1]));
  for(let i=0; i<n; i++){
      let money=m-(product[i][0]/2+product[i][1]);
      let cnt=1;
      for(let j=0; j<n; j++){
          if(j!==i && (product[j][0]+product[j][1])>money) break;
          if(j!==i && (product[j][0]+product[j][1])<=money){
              money-=(product[j][0]+product[j][1]);
              cnt++;
          }
      }
      answer=Math.max(answer, cnt);
  }
  return answer;
}

//K번째 큰수
// 3개를 뽑아(10C3) 더한값중 K번째 큰 수
function solution(n, k, card){
  let answer;
  let tmp = new Set();
  for(let i=0; i<n; i++){
      for(let j=i+1; j<n; j++){
          for(let k=j+1; k<n; k++){
              tmp.add(card[i]+card[j]+card[k]);
          }
      }
  }
  let a=Array.from(tmp).sort((a, b)=>b-a);
  answer=a[k-1];
  return answer;
}