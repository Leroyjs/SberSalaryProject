const _figuresArray = document.querySelectorAll('.figures');
const _figuresAll = []
_figuresArray.forEach(group => {
    _figuresAll.push(group.querySelectorAll('.slide-figure'));
});

_figuresAll.forEach((figures, i) => {
    figures.forEach((featuresFigure, j) => {
        featuresFigure.style.transform = `translateY(25px)`;
    });
});

let windowHeight = document.documentElement.clientHeight;

window.addEventListener('resize', () => {
    windowHeight = document.documentElement.clientHeight;
});

function setFeatureParallaxPosition() {
    const speedArray = [28, 26, 24, 29, 27, 27];

    _figuresAll.forEach((figures, i) => {
        figures.forEach((featuresFigure, j) => {
            const figureTop = featuresFigure.getBoundingClientRect().top;
            if (Math.abs(figureTop) <= windowHeight) {
                const offset = (figureTop * speedArray[i]) / windowHeight;
                featuresFigure.style.transform = `translateY(${offset}px)`;
            }
        });
    });
}

export const initSliderFiguresParallax = () => {
    window.addEventListener('scroll', setFeatureParallaxPosition);
};