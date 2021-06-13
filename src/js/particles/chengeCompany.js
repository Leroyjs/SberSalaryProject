export const chengeCompany = (company, isSlug = false) => {
  let companyObj;
  if (isSlug) {
    companyObj = companies.find(item => {
      return item.slug === company;
    });
  } else {
    companyObj = companies.find(item => {
      return item.title === company;
    });
  }

  if (companyObj) {
    chengeLogo(companyObj.logo);
    chengeFormCompany(companyObj.title);
    setModalValue(companyObj.title);
    window.activeCompany = companyObj.title;
  } else {
    chengeLogo(false);
    chengeFormCompany(company);
    setModalValue(company);
    window.activeCompany = company;
  }

  window.activeCompany = company;
};
function setModalValue(initValue) {
  const _changeCompanyInput = document
    .getElementById('change-company__form')
    .querySelector('.change-company__input');
  if (initValue) {
    _changeCompanyInput.value = initValue;
  } else {
    _changeCompanyInput.value = '';
  }
}
function chengeFormCompany(company) {
  const _formMainInputHelloChenge = document.getElementById(
    'form-main-input-hello-chenge'
  );
  const _companyNameInModal = document.getElementById(
    'change-company__company-name'
  );
  _companyNameInModal.innerText = company;
  _formMainInputHelloChenge.innerText = company;
}

function chengeLogo(logoName) {
  const _partnerLogo = document.getElementById('partner-logo');
  if (logoName) {
    _partnerLogo.style.opacity = 1;
    _partnerLogo.setAttribute('src', `media/partners/logo/${logoName}.svg`);
  } else {
    _partnerLogo.style.opacity = 0;
  }
}

const companies = [
  {
    slug: 'kontur',
    title: 'Контур',
    logo: 'kontur',
    img: 'kontur'
  }
];
