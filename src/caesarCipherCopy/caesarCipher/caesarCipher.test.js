import { caesarCipher } from "./caesarCipher";

// Return wrapping
test('Alphabet letter wrapping', () => {
  expect(caesarCipher('xyz', 3)).toEqual('abc');
});

// Return case preserved string
test('Case preservation', () => {
  expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr');
});

// Return punctuation
test('Return string with punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toEqual('Khoor, Zruog!');
});