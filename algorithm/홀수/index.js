function solution(arr){
  let odd = arr.filter(a => a % 2 !== 0 );
  let sum = odd.reduce((acc, curr) => acc + curr, 0);
  let min = Math.min(...odd);
  return [sum, min];
}
arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));  // [256, 41]