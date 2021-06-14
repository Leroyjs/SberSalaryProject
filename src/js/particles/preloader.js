export const initPreloader = () => {
  const _body = document.body;
  const _preloaderInner = document.querySelector('.preloader__cards-inner');
  let count = 0;

  // const preloaderInterval = setInterval(() => {
  //   // count += 1;
  //   setCard(_preloaderInner, (++count % 4) + 1);
  //   if ((count % 4) + 1 === 1) {
  //     setTimeout(() => {
  //       setCard(_preloaderInner, (++count % 4) + 1);
  //     }, 100);
  //   }
  // }, 1000);
  setTimeout(() => {
    _body.classList.add('loaded');
    _body.classList.remove('no-scroll');
    // clearInterval(preloaderInterval);
  }, 55000);
};

// function setCard(el, number) {
//   removeClasses(el);
//   el.classList.add(`preloader__cards-inner_card_${number}`);
// }
// function removeClasses(el) {
//   el.classList.remove('preloader__cards-inner_card_1');
//   el.classList.remove('preloader__cards-inner_card_2');
//   el.classList.remove('preloader__cards-inner_card_3');
//   el.classList.remove('preloader__cards-inner_card_4');
// }
