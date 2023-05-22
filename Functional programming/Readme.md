# Introduction

Functional programming (FP) is an approach to software development that uses pure functions to create maintainable software. In other words, building programs by applying and composing functions.

Functional programming is a programming paradigm where programs are constructed by applying and composing functions. It is a declarative programming paradigm in which function definitions are trees of expressions that map values to other values, rather than a sequence of imperative statements which update the running state of the program.

Functional programming is very different from imperative programming. The most significant differences stem from the fact that functional programming avoids side effects, which are used in imperative programming to implement state and I/O. Pure functional programming completely prevents side-effects and provides referential transparency.

It's a declarative programming paradigm which focuses on the "what" of the problem not on the "how" of a problem.

### Advantages

- It is easier to reason about functional programs because they are more declarative.
- Functional programs are often more concise and easier to read.
- Functional programs are easier to test- debugging and writing code with fewer bugs becomes quite a bit easier with pure functions. Because each function is simply a mapping of inputs to outputs, a simple stack trace or print statement at each level will reveal the problem. With imperative paradigms, you could have shared or mutable state almost anywhere else in the codebase that’s potentially causing the bug.
- Functional code tends to have its state isolated, making it easier to comprehend
- Concurrency is more easily kept safe. Pure functions are definitionally thread-safe. Code is thread-safe when we can guarantee that no two concurrent processes will be trying to access the same data at the same time. This is a called a race condition and is one of the hardest kind of bugs to pin down. Because pure functions never share state with other sections of a program they can't have race conditions.
- Functional programming supports the use of lazy evaluation, an evaluation strategy that holds the evaluation of an expression until the programme requires its value. This is more efficient and ideal for use when loading data that doesn't require frequent access. Functional programming supports the use of other lazy functional constructs, including lazy lists and lazy maps.

### Disadvantages

- Functional programming languages are typically less efficient in their use of CPU and memory than imperative languages
- Functional programs can be less efficient than imperative programs, especially for programs that require a lot of state changes.
- Immutable data can lead to performance problems. Immutable data means that once a value is created, it cannot be changed. This can lead to performance problems in some cases, such as when large amounts of data need to be processed
- Using only immutable values and recursion can potentially lead to performance problems, including RAM use and speed.

## First class citizens or functions

In functional programming, functions are treated as first-class citizens, meaning that they can be bound to names (including local identifiers), passed as arguments, and returned from other functions, just as any other data type can. This allows programs to be written in a declarative and composable style, where small functions are combined in a modular manner.

## Higher Order Functions

Higher-order functions are functions that can either take other functions as arguments or return them as results. In calculus, an example of a higher-order function is the differential operator d/dx, which returns the derivative of a function f.

## Pure functions

Pure functions (or expressions) have no side effects (memory or I/O). This means that pure functions have several useful properties, many of which can be used to optimize the code:

- If the result of a pure expression is not used, it can be removed without affecting other expressions.
- If a pure function is called with arguments that cause no side-effects, the result is constant with respect to that argument list (sometimes called referential transparency or idempotence), i.e., calling the pure function again with the same arguments returns the same result. (This can enable caching optimizations such as memoization.)
- If there is no data dependency between two pure expressions, their order can be reversed, or they can be performed in parallel and they cannot interfere with one another (in other terms, the evaluation of any pure expression is thread-safe).

## Recursion

Iteration (looping) in functional languages is usually accomplished via recursion. Recursive functions invoke themselves, letting an operation be repeated until it reaches the base case. In general, recursion requires maintaining a stack, which consumes space in a linear amount to the depth of recursion. This could make recursion prohibitively expensive to use instead of imperative loops. However, a special form of recursion known as tail recursion can be recognized and optimized by a compiler into the same code used to implement iteration in imperative languages. Tail recursion optimization can be implemented by transforming the program into continuation passing style during compiling, among other approaches.

## Referential transparency

Functional programs do not have assignment statements, that is, the value of a variable in a functional program never changes once defined. This eliminates any chances of side effects because any variable can be replaced with its actual value at any point of execution. So, functional programs are referentially transparent.

Consider C assignment statement x=x _ 10, this changes the value assigned to the variable x. Let us say that the initial value of x was 1, then two consecutive evaluations of the variable x yields 10 and 100 respectively. Clearly, replacing x=x _ 10 with either 10 or 100 gives a program a different meaning, and so the expression is not referentially transparent. In fact, assignment statements are never referentially transparent.

## Immutability

The data inside of a functional program’s functions is immutable. We can always create new variables and data structures but we aren’t allowed to modify the existing values.

The immutable nature of variables helps preserve the state throughout the program.

## Closure

A closure is the combination of a function bundled together (enclosed) with references to its surrounding environment
(the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
In JavaScript, closures are created every time a function is created, at function creation time.

```js
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
```

At first glance, it might seem unintuitive that this code still works. In some programming languages, the local variables within a function exist for just the duration of that function's execution. Once makeFunc() finishes executing, you might expect that the name variable would no longer be accessible. However, because the code still works as expected, this is obviously not the case in JavaScript.

The reason is that functions in JavaScript form closures. A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. In this case, myFunc is a reference to the instance of the function displayName that is created when makeFunc is run. The instance of displayName maintains a reference to its lexical environment, within which the variable name exists. For this reason, when myFunc is invoked, the variable name remains available for use, and "Mozilla" is passed to console.log.

## Composition

Function composition is an approach where the result of one function is passed on to the next function, which is passed to another until the final function is executed for the final result. Function compositions can be composed of any number of functions.

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
