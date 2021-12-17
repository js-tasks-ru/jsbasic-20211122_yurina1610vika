function toggleText() {
  const text = document.querySelector('#text');
  const btn = document.querySelector('.toggle-text-button');
  btn.addEventListener('click', () => {
    if (text.hidden === true) {
      text.hidden = false;
    } else {
      text.hidden = true;
    }
  });
}
