export const initPreloader = () => {
  let timeIsDone = false;
  setTimeout(() => {
    timeIsDone = true;
    if (window.pageLoaded) {
      preloaderInit();
    } else {
      window.addEventListener('load', () => {
        preloaderInit();
      });
    }
  }, 1000);
};

function preloaderInit() {
  const _body = document.body;
  _body.classList.add('loaded');
  _body.classList.remove('no-scroll');
}
