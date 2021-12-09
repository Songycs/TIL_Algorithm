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
