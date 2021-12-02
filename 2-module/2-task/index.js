function isEmpty(obj) {
  let arr = [];
  for(let key in obj) {
    arr.push(key);
  }
  if(arr.length === 0) {
    return true;
  }
  else {
    return false;
  }
}
