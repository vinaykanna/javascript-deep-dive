// A higher order function basically operates on other functions either by taking function as a parameter or returning function as a value.

function first() {
  console.log("first");
}

function second(func) {
  func();
  console.log("second");
}

second(first);

function third() {
  console.log("third");

  return function () {
    console.log("fourth");
  };
}

const fourth = third();
fourth();
