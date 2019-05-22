import BasePage from '~/Framework/Components/Page/BasePage';

import Validator from '~/Framework/Managers/Validator';

import EmailCollaborate from '~/Application/Services/EmailCollaborate';
import EmailCollaborateRequest from '~/Application/Services/EmailCollaborate/Requests';

class ContactPage extends BasePage {

    constructor(cb) {
        super(cb);

        this.id = '#expedio_contact';
        this.el = $(this.id);
        this.config = {
            position : 'right'
        };

        this.name = 'contact';
        this.validator = [];
        
        this.fbContainer = '.fb-container';
        this.fbChatBtn = '#fbChatBtn';

        this.fbIsShown = false;

    }

    onload() {
        if(this.loaded) {
            return;
        }

        this.loaded = true;

        this.initValidator();
        this.initMessenger();
    }

    initValidator() {

        
        this.validator = new Validator('[data-form]');

        $('body').on('submit', '[data-form]', this.onSubmit.bind(this));
        
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.validator.check()) {
            //has no errors 
            let request = new EmailCollaborateRequest(this.validator.data.toValidatorData());

            EmailCollaborate.handle(request.formData)
                .then((res) =>{
                    
                    if(res) {
                        $('[data-form]')[0].reset();
                        this.validator.resetValidations();

                        $('[data-modal=sent-modal]').modal();

                    }
                    
                })
        }
    }

    initMessenger() {

        $(this.fbChatBtn).on('click', () => {
            try{
                if(this.fbIsShown) {

                    FB.CustomerChat.hideDialog();

                } else {
                    
                    FB.CustomerChat.showDialog()

                }

                $('.fb_dialog').hide();

                this.fbIsShown = !this.fbIsShown;

            } catch(e) {
                console.log(e);
            }
        })

    }

}

export default ContactPage;