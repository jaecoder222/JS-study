function solution(a,b,c) {
  let arr = [a,b,c].sort((x,y) => x-y)
  if(arr[2] < arr[0] + arr[1]){
    return "YES"
  }else {
    return "NO"
  }
}
solution(6,7,11)
