// The inner function will still have access to the variables of the outer function scope even if the outer function is executed
// The inner function forms a closure enclosed with  reference to the variables of the outer function scope.
// Closures are very important in programming languages where first class functions are supported

function makeFunc() {
  const name = "Mozilla";

  function displayName() {
    console.log(name);
  }

  return displayName;
}

const myFunc = makeFunc();
myFunc();
