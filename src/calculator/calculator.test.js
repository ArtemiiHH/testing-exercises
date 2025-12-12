import { Calculator } from "./calculator";

test('Add two numbers', () => {
  expect(Calculator.add(2, 2)).toBe(4);
});

test('Subtract two numbers', () => {
  expect(Calculator.subtract(4, 2)).toBe(2);
});

test('Multiply two numbers', () => {
  expect(Calculator.multiply(5, 2)).toBe(10);
});

test('Divide two numbers', () => {
  expect(Calculator.divide(10, 2)).toBe(5);
});