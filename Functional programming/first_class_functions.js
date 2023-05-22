// First class functions are basically objects like any other value.
// So they can be passed as a parameter, can be assigned to a variable, can be returned as a value from another function

function first() {
  console.log("first");
}

first();

const second = function () {
  console.log("second");
};

second();

function fourth(func) {
  func();
  console.log("fourth");
}

fourth(first);

function fifth() {
  console.log("fifth");

  return function () {
    console.log("sixth");
  };
}

const sixth = fifth();
sixth();
