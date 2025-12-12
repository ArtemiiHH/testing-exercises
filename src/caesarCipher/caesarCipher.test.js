import { caesarCipher } from "./caesarCipher";


test('Alphabet letter wrapping', () => {
  expect(caesarCipher('xyz', 3)).toEqual('abc');
});

test('Case preservation', () => {
  expect(caesarCipher('HeLLo', 3)).toEqual('KhOOr');
});