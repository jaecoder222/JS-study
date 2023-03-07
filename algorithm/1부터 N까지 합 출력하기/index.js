function solution(n){
  let arr = [];
  for(let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(solution(10));  // 55