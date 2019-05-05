import Config from '~/Application/Config';
import BasePage from '~/Framework/Components/Page/BasePage';

class ExperiencePage extends BasePage{

    constructor() {
        super();
        this.id =  '#expedio_experience'
        this.config = {
            position : 'left'
        };

        this.name = 'experience';

        this.departments_container = '.depts';
        this.loaded = false;

        this.el = $(this.id);

    }

    onload() {
        let department_members = Config.experience_page.departments;
        department_members.forEach((member) => {
            $(`${this.id} ${this.departments_container}`).append(this.departments_template(member));
        });

        this.loaded = true;
    }

    departments_template({name, position}) {
        return `<element class="depts-${name}">
            <img src="${asset_path}images/img-container-portrait.svg">
            <div class="thumb-details">
                <h5>${name.toTitleCase()}</h5>
                <p><small>${position}</small></p>
            </div>
        </element>`;
    }

}

export default ExperiencePage;