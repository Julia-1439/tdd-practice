import calc from "./calculator";

test("calculator exists", () => {
  expect(calc).toBeDefined();
});

describe("add", () => {
  test("happy case (1): two positive nums", () =>
    expect(calc.add(4, 5)).toBe(9));
  test("happy case (2): one negative num", () =>
    expect(calc.add(-2, 4)).toBe(2));
  test("happy case (3): two negative nums", () =>
    expect(calc.add(-10, -100)).toBe(-110));
  test("happy case (4): adding zero", () => 
    expect(calc.add(0, 5)).toBe(5));
  test("happy case (5): adding two zeros", () => 
    expect(calc.add(0, 0)).toBe(0));
  test("edge case (1): one invalid type", () => 
    expect(() => calc.add("2", 4)).toThrow());
  test("edge case (2): two invalid types", () => 
    expect(() => calc.add("5", "10")).toThrow());
});

// happy path for each operation: positive & negative numbers & zero
// edge: invalid variable type
