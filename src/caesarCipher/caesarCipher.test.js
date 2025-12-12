

test('Alphabet letter wrapping', () => {
  expect(caesarCipher('xyz', 3)).toEqual('abc');
});