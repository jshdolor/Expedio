import Rules from '~/Application/Config/Rules';
import validate from 'validate.js/validate';

class MyFormData {

    constructor(data) {
        this.data = data;
    }

    toValidatorData() {
        let vData = {};
        
        this.data.forEach(field => {

            if(field.value) {
                vData[field.name] = field.value;
            }

        });

        return vData;
    }


    toFormData() {

        let formData = new FormData();

        this.data.forEach((field) => {
            formData.append(field.name, field.value);
        });
        
        return formData;
    }


}

export default class Form{
    
    constructor(form){
        this.form = form;
        this.rules = Rules[$(form).attr('name')];
        this.data = {};

        $('body').on('submit', form, this.onSubmit.bind(this));
        $('body').on('change', form + ' input', this.handleValidation.bind(this));
        $('body').on('change', form + ' select', this.handleValidation.bind(this));
        $('body').on('change', form + ' textarea', this.handleValidation.bind(this));
        
    }

    onSubmit (e) {

        e.preventDefault();

    }

    handleValidation(e) {
        
        e.preventDefault();
        this.getData();
            
        let validateDetails = validate(
            this.data.toValidatorData(),
            this.rules,
            {format: "detailed"}
        );

        $('.error-notif').remove();

        if(validateDetails) {
            this.showErrors(validateDetails);
        }

    }

    showErrors(errors) {
        
        errors.forEach(error => {
            let html = this.errorTemplate(error.error);

            let input = $(this.form).find(`[name=${error.attribute}]`);

            input.next('small').remove();

            input.after(html);
            
        });

    }

    errorTemplate(errorMessage) {
        return `<small class="error-notif notification-text text-danger">${errorMessage}</small>`
    }

    getData() {

        this.data = new MyFormData($(this.form).serializeArray());
        
    }


}