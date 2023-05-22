// In this approach the output of one function is passed into another function as an input.

function minus(x) {
  return x - 2;
}

function triple(x) {
  return x * 3;
}

function increment(x) {
  return x + 1;
}

// Traditional Approach
const result = minus(triple(increment(4)));
console.log(result);

// Using Compose
function compose(...args) {
  return (x) => args.reduceRight((acc, curr) => curr(acc), x);
}

const result2 = compose(minus, triple, increment)(4);
console.log(result2);

// Using Pipe
function pipe(...args) {
  return (x) => args.reduce((acc, curr) => curr(acc), x);
}

const result3 = pipe(increment, triple, minus)(4);
console.log(result3);

// Using Currying
// Composing function with binary parameters is not possible.
// We can transform them to functions with unary parameters using currying.

function sum(x, y) {
  return x + y;
}

function double(x) {
  return x * 2;
}

function divBy(y, x) {
  return x / y;
}

function curry(func) {
  return function (x) {
    return function (y) {
      return func(x, y);
    };
  };
}

const result4 = divBy(2, double(sum(3, 5)));
console.log(result4);
const sumCurried = curry(sum);
const divCurried = curry(divBy);
const result5 = compose(divCurried(2), double, sumCurried(3))(5);
console.log(result5);
