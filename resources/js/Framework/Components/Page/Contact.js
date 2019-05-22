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
        //Load Facebook SDK for JavaScript
        $('body').append('<div id="fb-root"></div>');

        window.fbAsyncInit = function() {
            FB.init({
            xfbml            : true,
            version          : 'v3.3'
            });
        };

        (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        $('body').append(`
            <div 
                class="fb-customerchat" 
                attribution=setup_tool 
                page_id="1130388927137177" 
                theme_color="#64B646"></div>`);

        $(this.fbChatBtn).on('click', () => {
            $('.fb_dialog').click();
        })

    }

}

export default ContactPage;