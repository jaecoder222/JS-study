function solution(s){ 
  let answer = "" 
  for(const a of s){
    if(a === a.toUpperCase()){
      answer += a.toLowerCase()
    }else {
      answer += a.toUpperCase()
    }
  }
  return answer;
}
console.log(solution("StuDY")); // sTUdy