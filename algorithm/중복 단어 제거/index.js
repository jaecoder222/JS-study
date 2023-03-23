function solution(s){
  let a = s.filter((el, index) => {
    return s.indexOf(el) === index
  })
  return [...a].join(",");
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str)); // good,time,student