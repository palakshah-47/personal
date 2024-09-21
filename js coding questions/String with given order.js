//Sort an input character of string into a specified order.
// input: abbeace
// order: cba
// output: cbbaaee

function sortByOrder(inputStr, order) {
  //   let counts = new Array(order.length).fill(0);

  //   for (let ch of inputStr) {
  //     counts[order.indexOf(ch)]++;
  //   }

  //   let sortedString = '';

  //   for (let i = 0; i < counts.length; i++) {
  //     sortedString += order[i].repeat(counts[i]);
  //   }

  //   return sortedString;

  // return input.split('').sort((a, b) => order.indexOf(a) - order.indexOf(b)).join('');

  let arr = {};
  let output = '';

  if (!inputStr) return output;

  for (let i = 0; i < inputStr.length; i++) {
    let ch = inputStr.charCodeAt(i) - 97;
    arr[ch] = (arr[ch] || 0) + 1;
  }
  console.log(arr);

  for (let i = 0; i < order.length; i++) {
    let ch = order[i];
    let value = arr[ch.charCodeAt(0) - 97] || 0;

    if (value > 1) {
      // for (let j = 0; j < value; j++) {
      //   output += ch;
      // }
      output += ch.repeat(value);
    } else {
      output += ch;
    }
    arr[ch.charCodeAt(0) - 97] = 0;
  }

  // Object.entries(arr).forEach(([key, val]) => {
  //   if (val > 0) {
  //     let ch = String.fromCharCode(Number(key) + 97);
  //     output += ch;
  //   }
  // });
  for (const key in arr) {
    if (arr[key] > 0) {
      let ch = String.fromCharCode(Number(key) + 97);
      output += ch;
    }
  }

  return output;
}

console.log(sortByOrder('abebedacg', 'cba'));
