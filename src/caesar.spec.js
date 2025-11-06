import caesarCipher from "./caesar";

test("existence", () => expect(caesarCipher).toBeDefined());

describe("happy cases: lower case, no punctuation", () => {
  test("basic shift", () => expect(caesarCipher("abc", 1)).toBe("bcd"));
  test("basic shift", () => expect(caesarCipher("hello", 3)).toBe("khoor"));
  test("wraps around the alphabet", () => expect(caesarCipher("xyz", 3)).toBe("abc"));
  // test("negative key", () => expect(caesarCipher("abc", -1)).toBe("zab"));
});

// less conventional cases: uppercase, punctuation, 

// edge cases: identity cipher, loop twice