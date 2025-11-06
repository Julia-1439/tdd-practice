import { capitalize } from "./capitalize.js";

test('happy path (1)', () => {
  expect(capitalize("hello world")).toBe("Hello world");
});