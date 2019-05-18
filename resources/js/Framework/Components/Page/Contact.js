import BasePage from '~/Framework/Components/Page/BasePage';

class ContactPage extends BasePage {

    constructor(cb) {
        super(cb);

        this.id = '#expedio_contact';
        this.el = $(this.id);
        this.config = {
            position : 'right'
        };

        this.name = 'contact';
    }

    onload() {
        if(this.loaded) {
            return;
        }

        this.loaded = true;
    }

}

export default ContactPage;