function showSalary(users, age) {
  let newArr = [];
  users.map(function (item) {
    if (item.age <= age) {
      newArr.push(item.name + ", " + item.balance);
    }
  });
  return newArr.join('\n');
}
