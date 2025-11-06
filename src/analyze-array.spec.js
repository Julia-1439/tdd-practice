import analyzeArray from "./analyze-array";

describe("existence", () => {
  test("existence of function", () => expect(analyzeArray).toBeDefined());
  test("existence of object", () => expect(analyzeArray()).toBeInstanceOf(Object));
  test("existence of properties", () => 
    expect(analyzeArray()).toHaveProperty("average") && 
    expect(analyzeArray()).toHaveProperty("min") && 
    expect(analyzeArray()).toHaveProperty("max") && 
    expect(analyzeArray()).toHaveProperty("length")
  );
});

const happyCase1 = [1,8,3,4,2,6];
const zeroCase = [0,0,0,0,0];
const typeMismatchCase = [1, null, undefined, 5, "4"];

describe("average", () => {
  test(`happy case 1 [${happyCase1.toString()}]`, () => expect(analyzeArray(happyCase1).average).toBe(4));
  test(`zero case [${zeroCase.toString()}]`, () => expect(analyzeArray(zeroCase).average).toBe(0));
  test(`empty case []`, () => expect(analyzeArray([]).average).toBe(null));
});

describe("min", () => {
  test(`happy case 1 [${happyCase1.toString()}]`, () => expect(analyzeArray(happyCase1).min).toBe(1));
  test(`zero case [${zeroCase.toString()}]`, () => expect(analyzeArray(zeroCase).min).toBe(0));
  test(`empty case []`, () => expect(analyzeArray([]).min).toBe(null));
  test("two minima", () => expect(analyzeArray([5,4,7,4,10]).min).toBe(4));
});

describe("max", () => {
  test(`happy case 1 [${happyCase1.toString()}]`, () => expect(analyzeArray(happyCase1).max).toBe(8));
  test(`zero case [${zeroCase.toString()}]`, () => expect(analyzeArray(zeroCase).max).toBe(0));
  test(`empty case []`, () => expect(analyzeArray([]).max).toBe(null));
  test("two maxima", () => expect(analyzeArray([5,4,7,10,4,10]).max).toBe(10));
});

describe("length", () => {
  test(`happy case 1 [${happyCase1.toString()}]`, () => expect(analyzeArray(happyCase1).length).toBe(6));
  test(`empty case []`, () => expect(analyzeArray([]).length).toBe(0));
});


describe("altogether", () => {
  test(`happy case 1 [${happyCase1.toString()}]`, () => expect(analyzeArray(happyCase1)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  }));
  test(`zero case [${zeroCase.toString()}]`, () => expect(analyzeArray(zeroCase)).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 5,
  }));
  test("multiple minina and maxima", () => expect(analyzeArray([2,2,10,10,5])).toEqual({
    average: 5.8, // how do you test for closeness here?
    min: 2,
    max: 10,
    length: 5,
  }));
  test(`type mismatch [${typeMismatchCase.toString()}]`, () => expect(() => analyzeArray(typeMismatchCase).average).toThrow());
});
