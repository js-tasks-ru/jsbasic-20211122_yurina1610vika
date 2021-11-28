function truncate(str, maxlength) {
  let string = str;
  if (str.length > maxlength) {
    string = str.substr(0, maxlength - 1) + "…";
  }
  return string;
}
