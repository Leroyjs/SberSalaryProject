const _acquaintedFigures = document.querySelector('.acquainted__figures');
let windowHeight = document.documentElement.clientHeight;

window.addEventListener('resize', () => {
  windowHeight = document.documentElement.clientHeight;
});

export const initAcquainted = () => {
  window.addEventListener('scroll', setActualPosition);
};

function setActualPosition() {
  if (
    Math.abs(_acquaintedFigures.getBoundingClientRect().top) <= windowHeight
  ) {
    const offset =
      (_acquaintedFigures.getBoundingClientRect().top * 70) / windowHeight;
    _acquaintedFigures.style.transform = `translateY(${offset}px)`;
  }
}
