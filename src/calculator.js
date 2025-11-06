const calculator = (() => {
  function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Inputs must be a number only");
    return a + b;
  }

  return {
    add,
  };
})();

export default calculator;
