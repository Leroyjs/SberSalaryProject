const figures = document.querySelectorAll('.figures');

let windowHeight = document.documentElement.clientHeight;

// window.addEventListener('resize', () => {
//     windowHeight = document.documentElement.clientHeight;
// });

function setFeatureParallaxPosition() {
  figures.forEach((figure, i) => {
    let figureTop = figure.getBoundingClientRect().top;
    if (Math.abs(figureTop) <= windowHeight * 1.3) {
      const offset = (figureTop * -15) / windowHeight;
      figure.style.transform = `translateY(${offset}px)`;
    }
  });
}

export const initSliderFiguresParallax = () => {
  window.addEventListener('scroll', setFeatureParallaxPosition);
};
