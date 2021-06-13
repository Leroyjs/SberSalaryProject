import '~/sass/main';
import { initPreloader } from '~/js/particles/preloader';
import { initMainForm } from '~/js/particles/mainForm';
import { chengeCompany } from '~/js/particles/chengeCompany';
import { ancorsInit } from '~/js/particles/ancors';
import { initAcquainted } from '~/js/particles/acquainted';
import { getActiveCompanyByGetParameter } from '~/js/particles/getActiveCompanyByGetParameter';
import '~/js/particles/features';

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

window.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initMainForm();
  ancorsInit();
  initAcquainted();
  chengeCompany(getActiveCompanyByGetParameter(), true);
});
