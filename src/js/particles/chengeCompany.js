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
    setAncors(companyObj.slug);
    setMainImg(companyObj.img);
    window.activeCompany = companyObj.title;
  } else {
    chengeLogo(false);
    chengeFormCompany(company);
    setModalValue(company);
    setMainImg('sber.jpg');
    window.activeCompany = company;
  }

  window.activeCompany = company;
};
function setMainImg(company) {
  const _mainImg = document.querySelector('.first-slide__img-wrapper');
  if (_mainImg) {
    _mainImg.style.backgroundImage = `url('media/partners/photo/${company}')`;
  }
}
function setAncors(company) {
  const _noCard = document.getElementById('no-card');
  const _haveCard = document.getElementById('have-card');
  const _logo = document.querySelector('.logo-a');
  _logo && _logo.setAttribute('href', `/?company=${company}`);
  _noCard && _noCard.setAttribute('href', `/no-card.html?company=${company}`);
  _haveCard &&
    _haveCard.setAttribute('href', `/have-card.html?company=${company}`);
}
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
  const _form = document.getElementById('form-section');
  _companyNameInModal.innerText = company;
  _formMainInputHelloChenge.innerText = company;
  if (company) {
    _form.classList.remove('no-company');
  } else {
    _form.classList.add('no-company');
  }
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
    img: 'kontur.jpg'
  }
];
