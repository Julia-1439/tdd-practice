const calculator = (() => {
  function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Inputs must be a number only");
    return a + b;
  }

  function sub(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Inputs must be a number only");
    return a - b;
  }

  function div(p, q) {
    if (typeof p !== "number" || typeof q !== "number")
      throw new Error("Inputs must be a number only");
    if (q === 0) throw new Error("Cannot divide by 0");
    return p / q;
  }

  function mult(a, b) {
    if (typeof a !== "number" || typeof b !== "number")
      throw new Error("Inputs must be a number only");
    return a * b;
  }

  return {
    add,
    sub,
    div,
    mult,
  };
})();

export default calculator;
