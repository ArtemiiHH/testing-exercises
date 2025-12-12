export function caesarCipher(string, position) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let result = "";

  for (let i = 0; i < string.length; i++) {
    let character = string[i];

    if (alphabet.includes(character.toLowerCase())) {
      let char = alphabet.indexOf(character);
      result += character;
    }
  }

  return result;
}
