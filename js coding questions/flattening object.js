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
      //   if (parentKey) {
      //     flatObj = {
      //       ...flatObj,
      //       ...flattenObj(obj[key], `${parentKey}_${key}`),
      //     };
      //   } else {
      //     flatObj = { ...flatObj, ...flattenObj(obj[key], key) };
      //   }
    } else {
      //   if (parentKey) {
      //     flatObj[`${parentKey}_${key}`] = obj[key];
      //   }
      //   else {
      flatObj[key] = obj[key];
      //   }
    }
  }
  return flatObj;
};

console.log(flattenObj({ a: 1, b: { c: 2, d: { e: 3 } } }));
