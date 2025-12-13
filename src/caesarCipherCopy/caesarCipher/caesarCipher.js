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
      // Index lookup
      const index = alphabet.indexOf(character.toLowerCase());
      // Wrap around logic
      const newPosition = (index + position) % 26;
      // Convert index back to letter
      const findLetter = alphabet[newPosition];
      // Append shifted letter
      result += findLetter;
    } else {
      result += character;
    }
  }

  return result;
}
