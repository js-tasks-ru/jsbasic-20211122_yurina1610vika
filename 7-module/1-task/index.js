import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = this.render();
  }

  render() {
    const menu = createElement(`
    <div class="ribbon">
      <!--Кнопка прокрутки влево-->
      <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
        <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
      </button>
  
      <!--Ссылки на категории-->
      <nav class="ribbon__inner">
        ${this.renderLinks()}
      </nav>
  
      <!--Кнопка прокрутки вправо-->
      <button class="ribbon__arrow ribbon__arrow_right">
        <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>
    `);

    const arrowRight = menu.querySelector('.ribbon__arrow_right');
    const arrowLeft = menu.querySelector('.ribbon__arrow_left');
    const ribbonInner = menu.querySelector('.ribbon__inner');


    arrowRight.classList.add('ribbon__arrow_visible');
    arrowLeft.classList.remove('ribbon__arrow_visible');

    arrowLeft.addEventListener('click', () => {
      ribbonInner.scrollBy(-350, 0);
    });

    arrowRight.addEventListener('click', () => {
      ribbonInner.scrollBy(350, 0);
    });

    ribbonInner.addEventListener('scroll', () => {
      let scrollPosition = ribbonInner.scrollWidth - ribbonInner.scrollLeft - ribbonInner.clientWidth;
      if (ribbonInner.scrollLeft === 0) {
        arrowLeft.classList.remove('ribbon__arrow_visible');
      } else {
        arrowLeft.classList.add('ribbon__arrow_visible');
      }

      if (scrollPosition < 1) {
        arrowRight.classList.remove('ribbon__arrow_visible');
      } else {
        arrowRight.classList.add('ribbon__arrow_visible');
      }
    });

    const links = menu.querySelectorAll('.ribbon__item');

    ribbonInner.addEventListener('click', (event) => {
      for (let link of links) {
        if (event.target === link) {
          link.classList.add('ribbon__item_active');
          event.preventDefault();

          const ev = new CustomEvent('ribbon-select', {
            detail: link.dataset.id,
            bubbles: true
          });
          link.dispatchEvent(ev);

        } else {
          link.classList.remove('ribbon__item_active');
        }
      }
    });

    return menu;
  }

  renderLinks() {
    return this.categories.map(item => {
      return `<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`;
    }).join('');
  }
}
