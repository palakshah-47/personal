function solution(numbers, left, right) {
  if(!numbers.length) return [];
  let result = new Array(numbers.length).fill(false);
  for(let i = 0; i < numbers.length; i++){ 
      let num = i+1;     
      let x = numbers[i]/num;
      if(x>= left && x<= right && x%1 === 0){
          result[i] = true;
      }else{
          result[i] = false;
      }
  }
  return result;
}

console.log(solution([8, 5, 6, 16, 5], 1, 3));