function findLongestWord(sentence) {
  const Characters = [
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
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let words = sentence.split(" ");
  let maxLength = 0;
  let result = "";

  for (let i = 0; i < words.length; i++) {
    let word = "";

    for (let j = 0; j < words[i].length; j++) {
      if (Characters.includes(words[i][j])) {
        word = word + words[i][j];
      }
    }

    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }

  return result;
}
