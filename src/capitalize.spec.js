import { capitalize } from "./capitalize.js";

test('happy path (1)', () => {
  expect(capitalize("hello world")).toBe("Hello world");
});

test('happy path (2)', () => {
  expect(capitalize("per my previous email")).toBe("Per my previous email");
});