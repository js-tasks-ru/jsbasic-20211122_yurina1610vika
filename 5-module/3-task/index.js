function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const carouselSlideWidth = document.querySelector('.carousel__slide').offsetWidth;
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const disableRightPosition = carouselSlideWidth * 3;
  const disableLeftPosition = 0;
  let position = 0;

  arrowLeft.style.display = 'none';

  arrowRight.addEventListener('click', () => {
    position -= carouselSlideWidth;
    carouselInner.style.transform = `translateX(${position}px)`;
    if (position === -disableRightPosition) {
      arrowRight.style.display = 'none';
    }
    if (position !== disableLeftPosition) {
      arrowLeft.style.display = 'flex';
    }
  });

  arrowLeft.addEventListener('click', () => {
    position += carouselSlideWidth;
    carouselInner.style.transform = `translateX(${position}px)`;
    if (position === disableLeftPosition) {
      arrowLeft.style.display = 'none';
    }
    if (position !== -disableRightPosition) {
      arrowRight.style.display = 'flex';
    }
  });
}
