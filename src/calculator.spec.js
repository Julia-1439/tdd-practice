import calc from "./calculator";

test("calculator exists", () => {
  expect(calc).toBeDefined();
});

describe("add", () => {
  test("happy case (1): positive nums", () => expect(calc.add(4, 5)).toBe(9));
  test("happy case (2): one negative num", () => expect(calc.add(-2, 4)).toBe(2));
});


// happy path for each operation: positive & negative numbers
// edge: invalid variable type, zero