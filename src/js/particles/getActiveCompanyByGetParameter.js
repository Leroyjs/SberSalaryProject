export const getActiveCompanyByGetParameter = () => {
  const company = getParam('company');
  console.log(company);
  return company;
};
function getParam(key) {
  var p = window.location.search;
  p = p.match(new RegExp(key + '=([^&=]+)'));
  return p ? p[1] : false;
}
