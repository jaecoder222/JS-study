function solution(s){  
  let answer = ""
  if(s.length % 2 === 0){
    answer += s[s.length / 2-1]
    answer += s[s.length / 2]
  }else {
    answer += s[Math.ceil(s.length / 2)-1]
  }
  return answer;
}
console.log(solution("study")); // u