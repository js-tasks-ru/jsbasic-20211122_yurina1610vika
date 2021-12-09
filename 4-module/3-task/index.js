function highlight(table) {
  let rows = table.rows;
  for (let i = 1; i < rows.length; i++) {
    if(rows[i].cells[3].hasAttribute('data-available')) {
      if(rows[i].cells[3].getAttribute('data-available') === 'true') {
        rows[i].classList.add('available');
      } else {
        rows[i].classList.add('unavailable');
      }
      console.log(rows[i].cells[3].getAttribute('data-available')) ;

    } else {
      rows[i].hidden = true;
    }
  }
  for (let i = 1; i < rows.length; i++) {
    if(rows[i].cells[2].textContent === 'm') {
      rows[i].classList.add('male');
    }
    if(rows[i].cells[2].textContent === 'f') {
      rows[i].classList.add('female');
    }
  }
  for (let i = 1; i < rows.length; i++) {
    if(+(rows[i].cells[1].textContent) < 18) {
      rows[i].style.textDecoration = 'line-through';
    }
  }
}
