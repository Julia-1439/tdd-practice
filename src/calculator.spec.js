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
  test("happy case (6): adding floats", () => 
    expect(calc.add(0.2, 0.1)).toBeCloseTo(0.3));
  test("edge case (1): one invalid type", () => 
    expect(() => calc.add("2", 4)).toThrow());
  test("edge case (2): two invalid types", () => 
    expect(() => calc.add("5", "10")).toThrow());
});

describe("subtract", () => {
  test("happy case (1): two positive nums", () =>
    expect(calc.sub(4, 5)).toBe(-1));
  test("happy case (2a): first negative num", () =>
    expect(calc.sub(-2, 4)).toBe(-6));
  test("happy case (2b): second negative num", () =>
    expect(calc.sub(4, -3)).toBe(7));
  test("happy case (3): two negative nums", () =>
    expect(calc.sub(-10, -100)).toBe(90));
  test("happy case (4): subtract from zero", () => 
    expect(calc.sub(0, 5)).toBe(-5));
  test("happy case (5): subtract two zeros", () => 
    expect(calc.sub(0, 0)).toBe(0));
  test("happy case (6): subtract floats", () => 
    expect(calc.sub(0.1, 0.2)).toBeCloseTo(-0.1));
  test("edge case (1): one invalid type", () => 
    expect(() => calc.sub("2", 4)).toThrow());
  test("edge case (2): two invalid types", () => 
    expect(() => calc.sub("5", "10")).toThrow());
});
