// Map
function map(arr, callBack) {
  const result = [];

  for (let [index, item] of arr.entries()) {
    result.push(callBack(item, index));
  }

  return result;
}

const arr = [2, 98, 12, 65, 1, 5, 8, 9, 13, 28];

const mapResult = map(arr, (item, index) => item + index);
console.log(mapResult);

// Filter
function filter(arr, callBack) {
  const result = [];

  for (let [index, item] of arr.entries()) {
    if (callBack(item, index)) {
      result.push(item);
    }
  }

  return result;
}

const filterResult = filter(arr, (item) => item > 10);
console.log(filterResult);

// Reduce
function reduce(arr, callBack, initialValue) {
  let result = initialValue;

  for (let [index, item] of arr.entries()) {
    result = result ? callBack(result, item, index) : arr[index];
  }

  return result;
}

const reduceResult = reduce(arr, (acc, curr) => acc + curr);
console.log(reduceResult);
