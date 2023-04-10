function solution(arr) {
  let answer = new Array(arr.length).fill(1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        answer[i]++;
      }
    }
  }
  return answer;
}

let arr = [92, 92, 92, 100, 76]; // [2,2,2,1,5]
console.log(solution(arr));
