function solution(s){  
  let set = new Set(s);
  return [...set].join(""); //kset
}
console.log(solution("ksekkset"));