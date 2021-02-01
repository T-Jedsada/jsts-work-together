const { fib } = require("./fibonacci");

(() => {
  const result = fib(5);
  console.log("result: ", result);
})();
