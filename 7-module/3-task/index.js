import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({steps, value = 0}) {
    this.elem = this.render();

    this.steps = steps;
    this.value = value;

    this.createSteps(this.steps);
    this.setValue(this.steps, this.value);
  }

  render() {
    return createElement(`
      <div class="slider">
      
        <!--Ползунок слайдера с активным значением-->
        <div class="slider__thumb">
          <span class="slider__value">0</span>
        </div>
      
        <!--Полоска слайдера-->
        <div class="slider__progress"></div>
      
        <!-- Шаги слайдера (вертикальные чёрточки) -->
        <div class="slider__steps">
        </div>
      </div>
    `);
  }

  createSteps() {
    let container = this.elem.querySelector('.slider__steps');

    for (let i = 0; i < this.steps; i++) {
      let step = document.createElement('span');
      if (i === 0) {
        step.classList.add('slider__step-active');
      }
      container.append(step);
    }
  }

  setValue() {
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');
    let sliderValue = this.elem.querySelector('.slider__value');
    let segments = this.steps - 1;
    let steps = this.elem.querySelectorAll('.slider__steps span');

    this.elem.addEventListener('click', (event) => {

      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let approximateValue = leftRelative * segments;
      this.value = Math.round(approximateValue);
      let valuePercents = this.value / segments * 100;

      sliderValue.innerHTML = this.value;
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

      for (let item of steps) {
        item.classList.remove('slider__step-active');
      }

      steps[this.value].classList.add('slider__step-active');

      const ev = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
        detail: this.value, // значение 0, 1, 2, 3, 4
        bubbles: true // событие всплывает - это понадобится в дальнейшем
      });
      this.elem.dispatchEvent(ev);
    });
  }
}
