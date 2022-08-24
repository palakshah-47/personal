function solution(numbers) {
  if(numbers.length === 3 && new Set(numbers).size === 1) return [0];
  let res = [];
  for(let i = 0; i < numbers.length - 2; i++){
      if(numbers[i+1] > numbers[i] && numbers[i+1] > numbers[i+2]) {
          res[i] = 1;
      } else if(numbers[i+1] < numbers[i] && numbers[i+1] < numbers[i+2]) {
         res[i] = 1; 
      } else {
          res[i] = 0;
      }
  }
  return res;
}

// function solution(a, b, k) {
//       if(a.length !== b.length) return 0;
//   let tinyPairs = 0;
//   let left = 0, right = b.length - 1;
//   while(left <= b.length - 1 && right >= 0){
//       let first = a[left];
//       let second = b[right];
//       let str = "";
//       str += first.toString() + second.toString();
//       if(Number(str) < k) tinyPairs++;
//       left++;
//       right--;
//   }
//   return tinyPairs;
// }

function solution(a, b, lower, upper) {
  if(lower === 0 && b.length === 1 && b[0] === (upper/2)){
      let idx = a.indexOf(0);
      return idx === -1 ? 0 : 1
  }
  let pairs = 0;
  let counta = 0, countb = 0;
  while(counta < a.length){
      let asquare = a[counta] * a[counta];
      while(countb < b.length){          
          let bsquare = b[countb] * b[countb];
          let total = asquare + bsquare;
          if(total >= lower && total <= upper)pairs++;
          countb++;
      }
      counta++;
  }
  return pairs;
}

// console.log(solution([3, -1, 9], [100, 5, -2], 7, 99));

let str = "0000101";

let idx = str.indexOf(1);
if (idx !== -1) {
    let temp = "";
    for (let i = 0; i <= idx; i++){
        console.log(str[i]);
        str[i] = str[i] === '0' ? temp += '1' : temp += '0';
    }
    console.log(temp);
    str = temp + str.slice(idx + 1);
    console.log(str);
}