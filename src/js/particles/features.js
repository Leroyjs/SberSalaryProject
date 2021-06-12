import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';


const _sliderElement = document.querySelector('.slider-features');

const featuresSlider = new Flickity(_sliderElement, {
    cellAlign: 'left',
    percentPosition: false,
    prevNextButtons: false,
    on: {
        scroll: function () {
            console.log(this.x);
        }
    },
});


