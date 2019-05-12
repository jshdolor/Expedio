import BasePage from '~/Framework/Components/Page/BasePage';

class ContactPage extends BasePage {

    constructor() {
        super();
        this.id = '#expedio_contact';
        this.el = $(this.id);
        this.config = {
            position : 'right'
        };

        this.loaded = false;
    }

    onload() {
        if(this.loaded) {
            return;
        }

        this.loaded = true;
    }

}

export default ContactPage;