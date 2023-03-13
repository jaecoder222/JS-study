function solution(s, t){
  return s.split("").filter(i => i === t).length; 
}

let str="COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));