import '~/sass/main';
import {initMainForm} from '~/js/particles/mainForm';
import {chengeCompany} from '~/js/particles/chengeCompany';
import {initAcquainted} from '~/js/particles/acquainted';
import {getActiveCompanyByGetParameter} from '~/js/particles/getActiveCompanyByGetParameter';
import '~/js/particles/features';
import '~/js/particles/promos';

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

window.addEventListener('DOMContentLoaded', () => {
    initMainForm();
    initAcquainted();
    chengeCompany(getActiveCompanyByGetParameter(), true);
});
