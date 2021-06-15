const figures = document.querySelectorAll('.figures');
figures.forEach((figure) => {
    figure.style.transform = `translateY(-45px)`;
});

let windowHeight = document.documentElement.clientHeight;

// window.addEventListener('resize', () => {
//     windowHeight = document.documentElement.clientHeight;
// });

function setFeatureParallaxPosition() {
    figures.forEach((figure, i) => {
        const figureTop = figure.getBoundingClientRect().top;
        if (Math.abs(figureTop) <= windowHeight) {
            const offset = (figureTop * -80) / windowHeight;
            figure.style.transform = `translateY(${offset}px)`;
        }
    });
}

export const initSliderFiguresParallax = () => {
    window.addEventListener('scroll', setFeatureParallaxPosition);
};
