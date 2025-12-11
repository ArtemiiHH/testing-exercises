import { capitalize } from "./capitalize";

test('Capitalize the first letter of a string', () => {
  expect(capitalize('vova')).toEqual('Vova');
});