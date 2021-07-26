let preloaderIsDone = false;
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
  }, 2000);
  setTimeout(() => {
    if (!preloaderIsDone) {
      preloaderInit();
    }
  }, 5000);
};

function preloaderInit() {
  preloaderIsDone = true;
  const _body = document.body;
  _body.classList.add('loaded');
  _body.classList.remove('no-scroll');
}
