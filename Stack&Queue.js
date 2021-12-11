//Stack

//올바른 괄호

function solution(s){
  let answer="YES";
  stack=[];
  for(let x of s){
      if(x==='(') stack.push(x);
      else{
          if(stack.length===0) return "NO";
          stack.pop();
      }
  }
  if(stack.length>0) return "NO";
  return answer;
}

//괄호문자제거
function solution(s){
  let answer;
  let stack=[];
  for(let x of s){
      if(x===')'){
          while(stack.pop()!=='(');
      }
      else stack.push(x);
  }
  answer=stack.join('');
  return answer;
}

//후위식 연산
function solution(s){
  let answer;
  let stack=[];
  for(let x of s){
      if(!isNaN(x)) stack.push(Number(x));
      else{
          let rt=stack.pop();
          let lt=stack.pop();
          if(x==='+') stack.push(lt+rt);
          else if(x==='-') stack.push(lt-rt);
          else if(x==='*') stack.push(lt*rt);
          else if(x==='/') stack.push(lt/rt);
      }
  }
  answer=stack[0];
  return answer;
}


// QUEUE

//공주구하기

function solution(n, k){
  let answer;
  let queue=Array.from({length:n}, (v, i)=>i+1);
  while(queue.length){
      for(let i=1; i<k; i++) queue.push(queue.shift());
      queue.shift();
      if(queue.length===1) answer=queue.shift();
  }
  return answer;
}
//교육과정설계
function solution(need, plan){
  let answer="YES";
  let queue=need.split('');
  for(let x of plan){
      if(queue.includes(x)){
          if(x!==queue.shift()) return "NO";
      }
  }
  if(queue.length>0) return "NO";
  return answer;
}