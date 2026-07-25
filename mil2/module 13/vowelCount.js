function vowel(array) {
  let count = 0;
  let vowel = "aeiou";
  for (let i = 0; i < array.length; i++) {
    if (vowel.includes(array[i])) {
      count += 1;
    }
  }

  console.log(count);
}

const str = "maaasud";
vowel(str);
