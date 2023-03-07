  function solution(n){
    if( n % 12 === 0 ){
      return n / 12;
    }else {
      return Math.ceil(n / 12);
    }
  }
  console.log(solution(178));  // 15