Array.prototype.myFlat = function (depth = 0) {
  const result = [];
  //   this.forEach((item, id) => {
  //     if (Array.isArray(item) && depth > 0) {
  //       result.push(...item.myFlat(depth - 1));
  //     } else {
  //       result.push(item);
  //     }
  //   });
  function flatten(arr, depth) {
    for (const item of arr) {
      if (Array.isArray(item) && depth > 0) {
        flatten(item, depth - 1);
      } else {
        result.push(item);
      }
    }
  }
  flatten(this, depth);
  return result;
};

console.log("myFlat", [1, 2, [3, 4, [5, 6]]].myFlat());
console.log("original flat", [1, 2, [3, 4, [5, 6]]].flat());
