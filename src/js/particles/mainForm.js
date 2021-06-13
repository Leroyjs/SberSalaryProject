import { chengeCompany } from '~/js/particles/chengeCompany';

export const initMainForm = () => {
  const _nameInput = document.getElementById('form-main-input-name');
  const _phoneInput = document.getElementById('form-main-input-phone');
  const _nameError = document.getElementById('form-main-name-error');
  const _phoneError = document.getElementById('form-main-phone-error');
  const _form = document.getElementById('form-main');
  const _chengeCompany = document.getElementById(
    'form-main-input-hello-chenge'
  );
  const _changeCompanyForm = document.getElementById('change-company__form');
  const _modalChengeCompany = document.getElementById('modal-chenge-company');
  const _modalChengeCompanyCancelButton = document.getElementById(
    'change-company-cancel'
  );
  const errors = {
    phone: '',
    name: ''
  };

  _phoneInput.addEventListener('input', mask, false);

  _changeCompanyForm.addEventListener('submit', e => {
    e.preventDefault();

    const value = _changeCompanyForm.querySelector(
      '.change-company__input'
    ).value;
    chengeCompany(value);
    _modalChengeCompany.classList.remove('modal_active');
    document.body.classList.remove('no-scroll');
  });

  _chengeCompany.addEventListener('click', () => {
    _modalChengeCompany.classList.add('modal_active');
    document.body.classList.add('no-scroll');
  });
  _modalChengeCompanyCancelButton.addEventListener('click', () => {
    _modalChengeCompany.classList.remove('modal_active');
    document.body.classList.remove('no-scroll');
  });

  _form.addEventListener('submit', e => {
    e.preventDefault();
    checkErrors();
    setErrorsState();
    mailTo();
  });

  function setErrorsState() {
    if (errors.phone) {
      _phoneError.innerText = errors.phone;
      _phoneError.style.display = 'block';
    } else {
      _phoneError.innerText = errors.phone;
      _phoneError.style.display = 'none';
    }
    if (errors.name) {
      _nameError.innerText = errors.name;
      _nameError.style.display = 'block';
    } else {
      _nameError.innerText = errors.name;
      _nameError.style.display = 'none';
    }
  }
  function checkErrors() {
    let error = false;
    if (!_nameInput.value) {
      errors.name = 'Поле обязательно для заполнения';
      error = true;
    } else {
      errors.name = '';
    }
    if (!_phoneInput.value) {
      errors.phone = 'Поле обязательно для заполнения';
      error = true;
    } else if (_phoneInput.value.split('_').length > 1) {
      errors.phone = 'Необходимо ввести номер телефона';
      error = true;
    } else {
      errors.phone = '';
    }
    return error;
  }
};

function mask() {
  var matrix = '+7 (___) ___-____',
    i = 0,
    def = matrix.replace(/\D/g, ''),
    val = this.value.replace(/\D/g, '');
  def.length >= val.length && (val = def);

  matrix = matrix.replace(/[_\d]/g, function (a) {
    return val.charAt(i++) || '_';
  });
  this.value = matrix;
  i = matrix.lastIndexOf(val.substr(-1));
  i < matrix.length && matrix != this.defaultValue
    ? i++
    : (i = matrix.indexOf('_'));
  setCursorPosition(i, this);
}
function setCursorPosition(pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
  else if (elem.createTextRange) {
    var range = elem.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

function mailTo() {
  let body = `name=${_nameInput.value}&phone=${_phoneInput.value}`;
  const url = '/mail.php';
  body = body.replace(/\s/g, '');
  console.log(body);
  fetch(url, {
    method: 'POST',
    body: body,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Request-Headers': 'X-Requested-With, Origin'
    }
  }).then(data => {
    console.log(data);
  });
}