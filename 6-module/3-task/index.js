import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.render(slides);
    this.position = 0;
  }

  render() {
    const carousel = createElement(`
          <div class="carousel">
            <div class="carousel__arrow carousel__arrow_right">
              <img src="../../assets/images/icons/angle-icon.svg" alt="icon">
            </div>
            <div class="carousel__arrow carousel__arrow_left">
              <img src="../../assets/images/icons/angle-left-icon.svg" alt="icon">
            </div>
            <div class="carousel__inner">
            ${this.createSlides()}
            </div>
          </div>
    `);

    const arrowRight = carousel.querySelector('.carousel__arrow_right');
    const arrowLeft = carousel.querySelector('.carousel__arrow_left');
    const carouselInner = carousel.querySelector('.carousel__inner');
    const disableLeftPosition = 0;

    arrowLeft.style.display = 'none';
    
    arrowRight.addEventListener('click', () => {
      const carouselSlideWidth = carousel.querySelector('.carousel__slide').offsetWidth;
      const disableRightPosition = carouselSlideWidth * (this.slides.length - 1);
      this.position -= carouselSlideWidth;
      carouselInner.style.transform = `translateX(${this.position}px)`;
      if (this.position === -disableRightPosition) {
        arrowRight.style.display = 'none';
      }
      if (this.position !== disableLeftPosition) {
        arrowLeft.style.display = '';
      }
    });

    arrowLeft.addEventListener('click', () => {
      const carouselSlideWidth = carousel.querySelector('.carousel__slide').offsetWidth;
      const disableRightPosition = carouselSlideWidth * (this.slides.length - 1);
      this.position += carouselSlideWidth;
      carouselInner.style.transform = `translateX(${this.position}px)`;
      if (this.position === disableLeftPosition) {
        arrowLeft.style.display = 'none';
      }
      if (this.position !== -disableRightPosition) {
        arrowRight.style.display = '';
      }
    });

    const addBtns = carousel.querySelectorAll('.carousel__button');
    for (let btn of addBtns) {
      btn.addEventListener('click', (event) => {
        let slide = event.target.closest('.carousel__slide');
        const ev = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
          detail: slide.dataset.id, // Уникальный идентификатора товара из объекта товара
          bubbles: true // это событие всплывает - это понадобится в дальнейшем
        });
        carousel.dispatchEvent(ev);
      });
    }

    return carousel;
  }

  createSlides() {
    return this.slides.map(item => {
      return `<div class="carousel__slide" data-id="${item.id}">
                <img src="../../assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
                  <div class="carousel__caption">
                    <span class="carousel__price">€${item.price.toFixed(2)}</span>
                    <div class="carousel__title">${item.name}</div>
                    <button type="button" class="carousel__button">
                      <img src="../../assets/images/icons/plus-icon.svg" alt="icon">
                    </button>
                  </div>
              </div>`;
    }).join('');
  }
}
