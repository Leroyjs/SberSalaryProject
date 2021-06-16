const _acquaintedFigures = document.querySelector('.acquainted__figures');
let windowHeight = document.documentElement.clientHeight;

// window.addEventListener('resize', () => {
//   windowHeight = document.documentElement.clientHeight;
// });

export const initAcquainted = () => {
  setActualPosition();
  window.addEventListener('scroll', setActualPosition);
};

function setActualPosition() {
  if (
    Math.abs(_acquaintedFigures.getBoundingClientRect().top) <=
    windowHeight * 1.3
  ) {
    const offset =
      (_acquaintedFigures.getBoundingClientRect().top * 30) / windowHeight;
    _acquaintedFigures.style.transform = `translateY(${offset}px)`;
  }
}
