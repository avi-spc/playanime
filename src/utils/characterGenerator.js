const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabets = alpha.map((x) => String.fromCharCode(x));

const digits = Array.from(Array(10).keys());

const extraPatterns = ["All", "#"];

export const searchCharacters = extraPatterns.concat(digits).concat(alphabets);
