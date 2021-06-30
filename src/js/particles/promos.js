import '../lib/youtube_iframe_api';
import Flickity from 'flickity';
import 'flickity/dist/flickity.min.css';

export const initVideoPlayers = () => {
    const players = document.querySelectorAll('.player');

    players.forEach(item => {
        initVideo(item);
    });

    function initVideo(item) {
        const videoId = item.getAttribute('data-video-id');
        const playerCover = item.firstChild.nextElementSibling;
        playerCover.style.backgroundImage = `url('https://img.youtube.com/vi/${videoId}/maxresdefault.jpg')`;

        item.addEventListener('click', () => {
            let player;

            let firstScriptTag = document.getElementsByTagName('script')[0];
            let secScriptTag = document.getElementsByTagName('script')[1];

            const isYT =
                firstScriptTag.getAttribute('src') ===
                'https://www.youtube.com/iframe_api' ||
                secScriptTag.getAttribute('src') ===
                'https://www.youtube.com/iframe_api';

            if (!isYT) {
                let tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                createNewPlayer();
            } else {
                createNewPlayer();
            }

            function createNewPlayer() {
                player = new YT.Player(item, {
                    height: '100%',
                    width: '100%',
                    videoId,
                    events: {
                        onReady: onPlayerReady
                    }
                });
            }
        });

        function onPlayerReady(event) {
            event.target.playVideo();
        }
    }
};

export const initPromoSlider = () => {
    const _sliderPromos = document.getElementById('promo-slider');
    const _sliderControls = document.querySelector('.promos__controls');

    const _prevItem = _sliderControls.querySelector(
        '.slider-promos__button_prev'
    );
    const _nextItem = _sliderControls.querySelector(
        '.slider-promos__button_next'
    );
    const _pageDots = _sliderControls.querySelector('.page-dots');
    const mql_720 = window.matchMedia("screen and (min-width: 720px)");

    function initFlickity(slider) {
        const dotsArray = [];
        let activeDot = null;
        const sliderOptions = {
            cellAlign: 'center',
            percentPosition: false,
            prevNextButtons: false,
            wrapAround: false,
            pageDots: false,
            on: {
                change: function (index) {
                    activeDot && activeDot.classList.remove('page-dots__dot_active');
                    activeDot = dotsArray[index];
                    activeDot.classList.add('page-dots__dot_active');
                }
            }
        }

        slider = new Flickity(_sliderPromos, sliderOptions);

        for (let i = 0; i < slider.slides.length; i++) {
            const dotElement = document.createElement('li');

            dotElement.addEventListener('click', () => {
                slider.select(i);
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
            slider.next();
        });

        _nextItem.addEventListener('click', () => {
            slider.previous();
        });

        return slider;
    }

    let flickity;
    if (!mql_720.matches) {
        flickity = initFlickity(_sliderPromos);
    }

    // replaceChild
    mql_720.addEventListener('change', (e) => {
        if (e.matches) {
            // flickity && flickity.destroy();
        } else {
            if (!flickity)
                flickity = initFlickity(_sliderPromos);
        }
    });
};
