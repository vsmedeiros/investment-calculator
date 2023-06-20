export const preventNotNumberCharacters = (evt) =>
  ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault();
