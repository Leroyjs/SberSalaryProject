import '~/sass/main';
import {initPreloader} from '~/js/particles/preloader';
import {initFeatureSlider} from '~/js/particles/features';
import {initPromoSlider} from '~/js/particles/promos';
import {initVideoPlayers} from '~/js/particles/promos';
import '~/js/particles/features';
import '~/js/particles/promos';

window.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initFeatureSlider();
    initPromoSlider();
    initVideoPlayers();
});
