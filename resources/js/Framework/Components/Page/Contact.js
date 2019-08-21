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


        this.fbAccountLoggedin = false;
        this.fbChatInit = false;
        this.initMessenger();

    }

    onload() {

        this.beforeShow();

        if(this.loaded) {
            return;
        }

        this.loaded = true;

        this.initValidator();
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
            this.fbAccountLoggedin = true;
        });

        FB.Event.subscribe('customerchat.dialogHide', () => {
            this.fbIsShown = false;
        });

        $(this.fbChatBtn).on('click', (e) => {

            let action = this.fbIsShown ? 'hideDialog' : 'showDialog';
            FB.CustomerChat[action]();

            if(this.fbChatInit) {
                return ;
            }

            //workaround - fb does not allow http protocol sites to access login status
            setTimeout(() => {
                if(!this.fbAccountLoggedin) {

                    let noFbText = '';
                    let count = 0;
                    setInterval(()=> {
                        if(count % 2 === 0) {
                            noFbText = 'FB Account Not Logged In';
                        } else {
                            noFbText = 'Log In then refresh this page';
                        }

                        $(this.fbChatBtn).html(`Chat with us <small style="color:yellow"><br>${noFbText}</small>`);
                        count++;
                    },1500);
    
                } else {
                    $(this.fbChatBtn).html('Chat with us');
                }

                this.fbChatInit = true;
            }, 800);
            
           
        });

    }

}

export default ContactPage;