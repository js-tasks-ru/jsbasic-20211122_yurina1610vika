function getMinMax(str) {
  let arr = str.split(' ');
  let newArr = [];

  arr.map(function (item) {
    if (typeof +item === 'number' && !isNaN(+item)) {
      newArr.push(+item);
    }
  });

  let max = Math.max(...newArr);
  let min = Math.min(...newArr);

  return {
    min: min,
    max: max,
  };
}
