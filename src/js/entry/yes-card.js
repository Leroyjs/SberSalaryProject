import '~/sass/main';
import {initMainForm} from '~/js/particles/mainForm';
import {chengeCompany} from '~/js/particles/chengeCompany';
import {initAcquainted} from '~/js/particles/acquainted';
import {getActiveCompanyByGetParameter} from '~/js/particles/getActiveCompanyByGetParameter';
import {initFeatureParallax} from '~/js/particles/features';

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

window.addEventListener('DOMContentLoaded', () => {
    initMainForm();
    initAcquainted();
    initFeatureParallax();
    chengeCompany(getActiveCompanyByGetParameter(), true);
});
