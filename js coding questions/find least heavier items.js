/*
find the sum for least hevier item in the list and also remove previous and next item if the least heavier item.
Then sum the least heavier items until list has only 1 value.
*/

const findSumforleastHeavy = (products) => {
  let total = 0;
  const filterProducts = (values) => {
    let minVal = Math.min(...values);
    let minValIndex = values.indexOf(minVal);
    total += minVal;
    let lowerLimit = minValIndex - 1;
    if (lowerLimit >= 0) values.splice(lowerLimit, 3);
    console.log(values);
    return values;
  };

  let filteredProdcuts = [...products];
  while (filteredProdcuts.length > 0) {
    filteredProdcuts = filterProducts(filteredProdcuts);
  }
  return total;
};

console.log(findSumforleastHeavy([4, 3, 2, 1]));
