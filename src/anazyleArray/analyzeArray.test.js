import { analyzeArray } from "./analyzeArray";

// Multiple elements
test("Analyze returns correct array properties", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

// Single element
test('Return single element array properties', () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1
  });
});
