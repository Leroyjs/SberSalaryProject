const _figuresArray = document.querySelectorAll('.figures');
const _figuresAll = []
_figuresArray.forEach(group => {
    _figuresAll.push(group.querySelectorAll('.slide-figure'));
});

let windowHeight = document.documentElement.clientHeight;

window.addEventListener('resize', () => {
    windowHeight = document.documentElement.clientHeight;
});

function setFeatureParallaxPosition() {
    const speedArray = [28, 26, 24, 29, 27, 27];

    _figuresAll.forEach(figures => {
        figures.forEach((featuresFigure, i) => {
            if (Math.abs(featuresFigure.getBoundingClientRect().top) <= windowHeight) {
                const offset = (featuresFigure.getBoundingClientRect().top * speedArray[i]) / windowHeight;
                featuresFigure.style.transform = `translateY(${offset}px)`;
            }
        });
    });
}

export const initSliderFiguresParallax = () => {
    window.addEventListener('scroll', setFeatureParallaxPosition);
};