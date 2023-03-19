 function solution(s){  
  let arr = s.map(a => a.length).sort()
  let max = arr[arr.length-1]
  for(let i = 0; i < s.length; i++) {
    if(s[i].length === max) {
      return s[i]
    }
  }
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str)); // beautiful