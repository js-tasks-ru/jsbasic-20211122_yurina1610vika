function makeFriendsList(friends) {
  const list = document.createElement('UL');
  const items = friends.map(item => `${item.firstName} ${item.lastName}`);
  list.insertAdjacentHTML('beforeend', items.map(item => `<li>${item}</li>`).join(''));
  return list;
}
