import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

export const initFeatureSlider = () => {
  const _sliderFeatures = document.querySelector('.slider-features');
  const _prevItem = document.querySelector('.slider-features__button_prev');
  const _nextItem = document.querySelector('.slider-features__button_next');
  const _pageDots = document.querySelector('.page-dots');

  const imgs = [];
  // const imgs = _sliderFeatures.querySelectorAll('.figures');
  const _figuresAll = _sliderFeatures.querySelectorAll('.figures');
  _figuresAll.forEach(figuresSlide => {
    const slideFigures = figuresSlide.querySelectorAll('.slide-figure');
    imgs.push(slideFigures);
  });

  const docStyle = document.documentElement.style;
  const transformProp =
    typeof docStyle.transform == 'string' ? 'transform' : 'WebkitTransform';

  const dotsArray = [];
  let activeDot = null;

  const featuresSlider = new Flickity(_sliderFeatures, {
    cellAlign: 'center',
    percentPosition: false,
    prevNextButtons: false,
    wrapAround: false,
    pageDots: false,
    on: {
      scroll: function (progress) {
        const carousel = this;
        const carouselWidth = carousel.size.width;

        carousel.slides.forEach(function (slide, i) {
          const slideFigures = imgs[i];
          const x = (((slide.target + carousel.x) % carouselWidth) * -1) / 6;

          slideFigures.forEach(figure => {
            if (
              figure.offsetLeft + x < carouselWidth &&
              figure.offsetLeft + x > carouselWidth * 0.14
            )
              figure.style[transformProp] = 'translateX(' + x + 'px)';
          });
        });
      },
      change: function (index) {
        activeDot && activeDot.classList.remove('page-dots__dot_active');
        activeDot = dotsArray[index];
        activeDot.classList.add('page-dots__dot_active');
      }
    }
  });

  for (let i = 0; i < featuresSlider.slides.length; i++) {
    const dotElement = document.createElement('li');

    dotElement.addEventListener('click', () => {
      featuresSlider.select(i);
    });

    if (i == 0) {
      dotElement.classList.add('page-dots__dot');
      dotElement.classList.add('page-dots__dot_active');
      activeDot = dotElement;
    } else dotElement.classList.add('page-dots__dot');

    _pageDots.appendChild(dotElement);
    dotsArray.push(dotElement);
  }

  _prevItem.addEventListener('click', () => {
    featuresSlider.next();
  });

  _nextItem.addEventListener('click', () => {
    featuresSlider.previous();
  });
};
