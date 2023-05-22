# Introduction

Functional programming (FP) is an approach to software development that uses pure functions to create maintainable software. In other words, building programs by applying and composing functions.

Functional programming is a programming paradigm where programs are constructed by applying and composing functions. It is a declarative programming paradigm in which function definitions are trees of expressions that map values to other values, rather than a sequence of imperative statements which update the running state of the program.

## First class citizens or functions

In functional programming, functions are treated as first-class citizens, meaning that they can be bound to names (including local identifiers), passed as arguments, and returned from other functions, just as any other data type can. This allows programs to be written in a declarative and composable style, where small functions are combined in a modular manner.

## Higher Order Functions

Higher-order functions are functions that can either take other functions as arguments or return them as results. In calculus, an example of a higher-order function is the differential operator d/dx, which returns the derivative of a function f.

## Pure functions

Pure functions (or expressions) have no side effects (memory or I/O). This means that pure functions have several useful properties, many of which can be used to optimize the code:

- If the result of a pure expression is not used, it can be removed without affecting other expressions.
- If a pure function is called with arguments that cause no side-effects, the result is constant with respect to that argument list (sometimes called referential transparency or idempotence), i.e., calling the pure function again with the same arguments returns the same result. (This can enable caching optimizations such as memoization.)
- If there is no data dependency between two pure expressions, their order can be reversed, or they can be performed in parallel and they cannot interfere with one another (in other terms, the evaluation of any pure expression is thread-safe).

## Imperative vs Functional programming

Traditional Imperative Loop:

```js
const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 0;
for (let i = 0; i < numList.length; i++) {
  if (numList[i] % 2 === 0) {
    result += numList[i] * 10;
  }
}
```

Functional Programming with higher-order functions:

```js
const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .filter((n) => n % 2 === 0)
  .map((a) => a * 10)
  .reduce((a, b) => a + b);
```
