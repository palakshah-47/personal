/*flat the object with below structure
{a: 1,
    b: {
        c: 2,
        d: {
            e: 3        
        }
    }
}  
output: {a:1, b_c:2, b_d_e:3} 
*/

const flattenObj = (obj) => {
  let flatObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      let flatObject = flattenObj(obj[key]);
      for (let y in flatObject) {
        flatObj[key + '_' + y] = flatObject[y];
      }
    } else {
      flatObj[key] = obj[key];
    }
  }
  return flatObj;
};

const flattenObj1 = (obj, parentKey = '', result = {}) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}_${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        flattenObj1(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
};

// console.log(flattenObj({ a: 1, b: { c: 2, d: { e: 3 } } }));
console.log(flattenObj1({ a: 1, b: { c: 2, d: { e: 3 } } }));
