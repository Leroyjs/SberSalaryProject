export const initPreloader = () => {
  const _body = document.body;
  setTimeout(() => {
    _body.classList.add('loaded');
    _body.classList.remove('no-scroll');
  }, 0);
};
