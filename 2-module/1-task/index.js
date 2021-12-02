function sumSalary(salaries) {
  let arr = [];
  let result = 0;
  for(let key in salaries) {
    if(typeof(salaries[key]) === "number" && isFinite(salaries[key]) && !isNaN(salaries[key])) {
      arr.push(salaries[key]);
    }
  }
  for(let item of arr) {
    result += item;
  }

  return result;
}
