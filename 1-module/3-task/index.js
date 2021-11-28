function ucFirst(str) {
  let firstLetter = str.slice(0, 1).toUpperCase();
  let mainPartStr = str.slice(1);
  return firstLetter + mainPartStr;
}
