import reverseString from "./reverseString";

test("function exists", () => {
  expect(reverseString).toBeDefined();
});

test("happy path (1)", () => {
  expect(reverseString("abc")).toBe("cba");
});

test("happy path (2)", () => {
  expect(reverseString("pickle")).toBe("elkcip");
});

test("edge: empty string", () => {
  expect(reverseString("")).toBe("");
});

test("edge: single character", () => {
  expect(reverseString("a")).toBe("a");
});

test("refuses to reverse non-strings", () => {
  expect(() => reverseString(5)).toThrow("Input must be a string");
})