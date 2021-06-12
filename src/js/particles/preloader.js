export const initPreloader = () => {
  const _body = document.body;
  setTimeout(() => {
    _body.classList.add('loaded');
  }, 0);
};
