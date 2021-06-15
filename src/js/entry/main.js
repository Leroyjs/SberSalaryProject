import '~/sass/main';
import { initPreloader } from '~/js/particles/preloader';
import { initMainForm } from '~/js/particles/mainForm';
import { chengeCompany } from '~/js/particles/chengeCompany';
import { ancorsInit } from '~/js/particles/ancors';
import { initAcquainted } from '~/js/particles/acquainted';
import { getActiveCompanyByGetParameter } from '~/js/particles/getActiveCompanyByGetParameter';
import {
  initFeatureParallax,
  initFeatureSlider
} from '~/js/particles/features';
import { initPromoSlider } from '~/js/particles/promos';
import { initVideoPlayers } from '~/js/particles/promos';
import '~/js/particles/features';
import '~/js/particles/promos';
import { initSliderFiguresParallax } from '@/particles/steps';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initMainForm();
  ancorsInit();
  initAcquainted();
  chengeCompany(getActiveCompanyByGetParameter(), true);
  initFeatureSlider();
  initFeatureParallax();
  initSliderFiguresParallax();
  initPromoSlider();
  initVideoPlayers();
  initMobileResize();
});
function initMobileResize() {
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  document.documentElement.style.setProperty('--fsvh', `${vh}px`);
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
}
