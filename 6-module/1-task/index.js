/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = this.render();
  }
  render() {
    const table = document.createElement('TABLE');
    let tbody = document.createElement('TBODY');
    let thead = document.createElement('THEAD');

    table.appendChild(thead);
    table.appendChild(tbody);

    thead.insertAdjacentHTML('afterbegin', `<tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr>`);
    tbody.insertAdjacentHTML('afterbegin', this.rows.map(item => {
      return `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.salary}</td><td>${item.city}</td><td><button class="btn">Х</button></td></tr>`;
    }).join(''));

    tbody.addEventListener('click', this.onClick);
    return table;
  }

  onClick(event) {
    if (event.target.tagName === 'BUTTON') {
      let row = event.target.closest('TR');
      row.parentElement.removeChild(row);
    }
  }
}
