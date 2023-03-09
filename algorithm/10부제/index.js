function solution(day, arr){
  let answer = 0;
  for(const num of arr){
    if(num % 10 === day){
      answer += 1;
    }
  }
  return answer;
}
arr=[12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));  // 3