import BasePage from '~/Framework/Components/Page/BasePage';
import Validator from '~/Framework/Managers/Validator';

import EmailCollaborate from '~/Application/Services/EmailCollaborate';
import EmailCollaborateRequest from '~/Application/Services/EmailCollaborate/Requests';

import {toDataURL} from '~/Framework/Helpers';

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

        this.submitBtn = '#submitBtn';

        this.form = '[data-form]';

        this.bldgImg = 'img#bldg';
        this.bldgContainer = '#bldgContainer';
        this.bldgAnimated = 'img#bldgAnimated';
    }

    onload() {

        this.beforeShow();

        if(this.loaded) {
            return;
        }

        this.loaded = true;

        this.initValidator();
        this.initMessenger();
        // this.initGraphics();
    }

    initValidator() {

        
        this.validator = new Validator(this.form);

        $('body').on('submit', this.form, this.onSubmit.bind(this));
        
    }

    initGraphics() {
        $(this.bldgAnimated).hide();
        
        $(this.bldgContainer)
            .mouseenter(() => {
                $(this.bldgImg).hide();
                $(this.bldgAnimated).show();
            })
            .mouseleave(() => {
                $(this.bldgImg).show();
                $(this.bldgAnimated).hide();
            })

    }

    onSubmit(e) {
        e.preventDefault();
        
        $(`${this.form} button, ${this.form} input, ${this.form} select, ${this.form} textfield`).prop('disabled');  

        if(this.validator.check()) {
            //has no errors 
            let request = new EmailCollaborateRequest(this.validator.data.toValidatorData());

            $(this.submitBtn).css('backgroundImage', `url("${asset_path}images/contact-us/sending.gif")`);

            EmailCollaborate.handle(request.formData)
                .then((res) =>{
                    
                    if(res) {
                        $('[data-form]')[0].reset();
                        this.validator.resetValidations();

                        let img = document.createElement('img');
                        img.src = `${asset_path}images/contact-us/sent.gif?x=` + new Date().getTime();
                        img.onload = () => {
                            $(this.submitBtn).css('backgroundImage', "url("+img.src+")")
                            //reset
                            setTimeout(() => {
                                $(this.submitBtn).css('backgroundImage', "")
                                $('[data-modal=sent-modal]').modal();
                            }, 1500);
                        }
                        $(img);
                        

                    }
                    
                }).finally(() => {

                    $(`${this.form} button, ${this.form} input, ${this.form} select, ${this.form} textfield`).prop('disabled', false);  

                })
        }
    }

    initMessenger() {

        FB.Event.subscribe('customerchat.dialogShow', () => {
            
            this.fbIsShown = true;

        });

        FB.Event.subscribe('customerchat.dialogHide', () => {
            
            this.fbIsShown = false;
            
        });

        $(this.fbChatBtn).on('click', () => {

            if(this.fbIsShown) {

                FB.CustomerChat.hideDialog();

            } else {
                
                FB.CustomerChat.showDialog()

            }
           
        })

    }

}

export default ContactPage;