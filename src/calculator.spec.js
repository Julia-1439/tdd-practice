import calc from "./calculator";

test("calculator exists", () => {
  expect(calc).toBeDefined();
});

describe("operators exist", () => {
  test("add", () => expect(calc.add).toBeDefined());
  test("sub", () => expect(calc.sub).toBeDefined());
  test("div", () => expect(calc.div).toBeDefined());
});

describe("add", () => {
  test("happy case: two positive nums", () =>
    expect(calc.add(4, 5)).toBe(9));
  test("happy case: one negative num", () =>
    expect(calc.add(-2, 4)).toBe(2));
  test("happy case: two negative nums", () =>
    expect(calc.add(-10, -100)).toBe(-110));
  test("happy case: adding zero", () => 
    expect(calc.add(0, 5)).toBe(5));
  test("happy case: adding two zeros", () => 
    expect(calc.add(0, 0)).toBe(0));
  test("edge case: float imprecision", () => 
    expect(calc.add(0.2, 0.1)).toBeCloseTo(0.3));
  test("edge case: one invalid type", () => 
    expect(() => calc.add("2", 4)).toThrow());
  test("edge case: two invalid types", () => 
    expect(() => calc.add("5", "10")).toThrow());
});

describe("subtract", () => {
  test("happy case: two positive nums", () =>
    expect(calc.sub(4, 5)).toBe(-1));
  test("happy case: first negative num", () =>
    expect(calc.sub(-2, 4)).toBe(-6));
  test("happy case: second negative num", () =>
    expect(calc.sub(4, -3)).toBe(7));
  test("happy case: two negative nums", () =>
    expect(calc.sub(-10, -100)).toBe(90));
  test("happy case: subtract from zero", () => 
    expect(calc.sub(0, 5)).toBe(-5));
  test("happy case: subtract two zeros", () => 
    expect(calc.sub(0, 0)).toBe(0));
  test("edge case: float imprecision", () => 
    expect(calc.sub(0.1, 0.2)).toBeCloseTo(-0.1));
  test("edge case: one invalid type", () => 
    expect(() => calc.sub("2", 4)).toThrow());
  test("edge case: two invalid types", () => 
    expect(() => calc.sub("5", "10")).toThrow());
});

describe("divide", () => {
  test("happy case: divisible numbers", () =>
    expect(calc.div(30, 6)).toBe(5));
  test("happy case: indivisible numbers: numerator > denominator", () =>
    expect(calc.div(24, 5)).toBe(4.8));
  test("edge case: float imprecision", () => 
    expect(calc.div(10, 3)).toBeCloseTo(3.33));
  test("happy case: indivisible numbers: numerator < denominator", () =>
    expect(calc.div(5, 10)).toBe(0.5));
  test("happy case: numerator equals denominator", () =>
    expect(calc.div(-10, -10)).toBe(1));
  test("happy case (5): numerator is 0", () => 
    expect(calc.div(0, 5)).toBe(0));
  test("edge case: denominator is 0", () => 
    expect(() => calc.div(10, 0)).toThrow());
  test("edge case: one invalid type", () => 
    expect(() => calc.div("2", 4)).toThrow());
  test("edge case: two invalid types", () => 
    expect(() => calc.div("5", "10")).toThrow());
});

