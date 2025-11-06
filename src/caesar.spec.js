import caesarCipher from "./caesar";

test("existence", () => expect(caesarCipher).toBeDefined());

describe("happy cases: lower case, no punctuation", () => {
  test("non-wrapping positive shift", () => expect(caesarCipher("abc", 1)).toBe("bcd"));
  test("non-wrapping positive shift", () => expect(caesarCipher("hello", 3)).toBe("khoor"));
  test("wrapping with positive shift", () => expect(caesarCipher("xyz", 3)).toBe("abc"));
  test("negative shift", () => expect(caesarCipher("fed", -1)).toBe("edc"));
  test("wrapping negative shift", () => expect(caesarCipher("abc", -3)).toBe("xyz"));
  test("identity cipher", () => expect(caesarCipher("helloworld", 0)).toBe("helloworld"));
});

// less conventional cases: uppercase, punctuation including space, 

// edge cases: identity cipher, loop twice