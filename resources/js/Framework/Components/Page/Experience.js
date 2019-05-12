import BasePage from '~/Framework/Components/Page/BasePage';

import PartnerBox from '~/Framework/Components/PartnerBox';
import EmployeeBox from '~/Framework/Components/EmployeeBox';

class ExperiencePage extends BasePage{

    constructor() {
        super();
        this.id =  '#expedio_experience'
        this.config = {
            position : 'left'
        };

        this.name = 'experience';

        this.departments_container = '.depts';
        this.partners_container = '.partners';


        this.loaded = false;

        this.el = $(this.id);

    }

    onload() {

        if(this.loaded) {
            return true;
        }

        this.loaded = true;
        
        let department_members = this.config.departments || [];
        let partners_members = this.config.partners || [];

        partners_members.forEach((member) => {
            new PartnerBox(member, this.$selector(this.partners_container)).attach();
        });

        department_members.forEach((member) => {
            new EmployeeBox(member, this.$selector(this.departments_container)).attach();
        });

    }

}

export default ExperiencePage;