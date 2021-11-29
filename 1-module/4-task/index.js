function checkSpam(str) {
  const string = str.toLowerCase();
  if (string.includes('1xbet') || string.includes('xxx')) {
    return true;
  }
  return false;
}
