function camelize(str) {
  return str.split('-').map(function (item, index) {
    if (index !== 0) {
      return item.slice(0, 1).toUpperCase() + item.slice(1);
    } else {
      return item;
    }
  }).join('');
}
