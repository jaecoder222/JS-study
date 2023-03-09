function solution(arr){
  let sum = arr.reduce((a,b) => a + b, 0);
  for(let i = 0; i < arr.length; i++){
    if(sum - 100 === (arr[i]+arr[i+1])){
      arr.splice(i,2)
    }
  }
  return arr;
}

let arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
// [20, 7, 23, 19, 10, 8, 13]