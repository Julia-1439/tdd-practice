import caesarCipher from "./caesar";

test("existence", () => expect(caesarCipher).toBeDefined());

describe("lower case, no punctuation", () => {
  test("non-wrapping positive shift", () => expect(caesarCipher("abc", 1)).toBe("bcd"));
  test("non-wrapping positive shift", () => expect(caesarCipher("hello", 3)).toBe("khoor"));
  test("wrapping with positive shift", () => expect(caesarCipher("xyz", 3)).toBe("abc"));
  test("negative shift", () => expect(caesarCipher("fed", -1)).toBe("edc"));
  test("wrapping negative shift", () => expect(caesarCipher("abc", -3)).toBe("xyz"));
  test("identity cipher", () => expect(caesarCipher("helloworld", 0)).toBe("helloworld"));
});

describe("upper case, no punctuation", () => {
  test("non-wrapping positive shift", () => expect(caesarCipher("ABC", 1)).toBe("BCD"));
  test("non-wrapping positive shift", () => expect(caesarCipher("HELLO", 3)).toBe("KHOOR"));
  test("wrapping with positive shift", () => expect(caesarCipher("XYZ", 3)).toBe("ABC"));
  test("negative shift", () => expect(caesarCipher("FED", -1)).toBe("EDC"));
  test("wrapping negative shift", () => expect(caesarCipher("ABC", -3)).toBe("XYZ"));
  test("identity cipher", () => expect(caesarCipher("HELLOWORLD", 0)).toBe("HELLOWORLD"));
});

describe("mixed case, no punctuation", () => {
  test("non-wrapping positive shift", () => expect(caesarCipher("AbC", 1)).toBe("BcD"));
  test("non-wrapping positive shift", () => expect(caesarCipher("HeLLo", 3)).toBe("KhOOr"));
  test("wrapping with positive shift", () => expect(caesarCipher("XYz", 3)).toBe("ABc"));
  test("negative shift", () => expect(caesarCipher("Fed", -1)).toBe("Edc"));
  test("wrapping negative shift", () => expect(caesarCipher("aBc", -3)).toBe("xYz"));
  test("identity cipher", () => expect(caesarCipher("HelloWorld", 0)).toBe("HelloWorld"));
});

describe("punctuation", () => {
  test("all conventional punctuation", () => expect(caesarCipher(" ,.?!@#$%^&*()-_=+[]{}\\|;:'\"<>", 12)).toBe(" ,.?!@#$%^&*()-_=+[]{}\\|;:'\"<>"));
});

describe("mixed case with punctuation", () => {
  test("\"Hello, World!\" with non-wrapping", () => expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!"));
  test("\"Hello, World!\" with negative wrapping", () => expect(caesarCipher("Hello, World!", -47)).toBe("Mjqqt, Btwqi!"));
  test("\"Hello, World!\" with identity cipher", () => expect(caesarCipher("Hello, World!", 0)).toBe("Hello, World!"));
});


// less conventional cases: uppercase, punctuation including space, 

// edge cases: identity cipher, loop twice