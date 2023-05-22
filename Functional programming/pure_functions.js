// should not have side effects - should not change the state outside of the function
// With the same inputs, always give the same output.

function add(a, b) {
  return a + b;
}

add(5, 7);

function max(...args) {
  let max = Number.NEGATIVE_INFINITY;

  for (let arg of args) {
    if (arg > max) {
      max = arg;
    }
  }

  return max;
}

let result = max(10, 5, 4, 2, 11, 19);
console.log(result);
