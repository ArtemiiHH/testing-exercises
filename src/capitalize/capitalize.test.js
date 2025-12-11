import { capitalize } from "./capitalize";

// Return capitalized string
test('Capitalize the first letter of a string', () => {
  expect(capitalize('string')).toEqual('String');
});

// Return same string if already capitalized
test('Return same string if already capitalized', () => {
  expect(capitalize('String')).toEqual('String');
});
