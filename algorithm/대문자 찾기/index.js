function solution(s){         
  return s.match(/[A-Z]/g).length;
}
let str="JaVaScript Is Very UseFul";
console.log(solution(str));