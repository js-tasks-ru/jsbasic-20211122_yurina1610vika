import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = this.render();
  }

  render() {
    return createElement(`
      <div class="modal">
        <!--Прозрачная подложка перекрывающая интерфейс-->
        <div class="modal__overlay"></div>
    
        <div class="modal__inner">
          <div class="modal__header">
            <!--Кнопка закрытия модального окна-->
            <button type="button" class="modal__close">
              <img src="../../assets/images/icons/cross-icon.svg" alt="close-icon" />
            </button>
    
            <h3 class="modal__title">
              Вот сюда нужно добавлять заголовок
            </h3>
          </div>
    
          <div class="modal__body">
            A сюда нужно добавлять содержимое тела модального окна
          </div>
        </div>
    
      </div>
`);
  }

  open() {
    const body = document.querySelector('body');
    const closeBtn = this.elem.querySelector('.modal__close');

    body.append(this.elem);
    body.classList.add('is-modal-open');

    closeBtn.addEventListener('click', () => this.close());

    document.addEventListener('keydown', (event) => {
      if (event.code === 'Escape') {
        this.close();
      }
    });
  }

  close() {
    const body = document.querySelector('body');
    this.elem.remove();
    body.classList.remove('is-modal-open');
  }

  setTitle(title) {
    const modalTitle = this.elem.querySelector('.modal__title');
    modalTitle.innerHTML = title;
  }

  setBody(body) {
    const modalBody = this.elem.querySelector('.modal__body');
    modalBody.innerHTML = "";
    modalBody.append(body);
  }
}
