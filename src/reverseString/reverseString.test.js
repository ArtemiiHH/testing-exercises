import { reverse } from "./reverseString";

// Reverse single word
test('Return reversed string', () => {
  expect(reverse('Hello')).toEqual('olleH');
});

// Reverse multiple words
test('Return multiple words', () => {
  expect(reverse('Hello, world!')).toEqual('!dlrow ,olleH');
});